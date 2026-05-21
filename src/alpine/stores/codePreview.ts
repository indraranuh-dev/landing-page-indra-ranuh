import type { Alpine } from 'alpinejs';

import type { CodeSnippet } from '../../data/codeSnippets';
import { highlightSnippet } from '../../lib/highlight';

const TYPING_INTERVAL_MS = 14;

export function registerCodePreviewStore(Alpine: Alpine, snippets: CodeSnippet[]) {
  Alpine.store('codePreview', {
    snippets,
    activeId: snippets[0]?.id ?? 'php',
    displayed: '',
    highlightedHtml: '',
    typing: false,
    timer: null as ReturnType<typeof setInterval> | null,
    started: false,

    get active(): CodeSnippet | undefined {
      return this.snippets.find((s) => s.id === this.activeId);
    },

    selectTab(id: string) {
      if (this.activeId === id && this.displayed.length > 0) return;
      this.stopTyping();
      this.activeId = id;
      this.runTyping();
    },

    syncHighlight() {
      const snippet = this.active;
      if (!snippet || !this.displayed) {
        this.highlightedHtml = '';
        return;
      }
      this.highlightedHtml = highlightSnippet(this.displayed, snippet.language);
    },

    runTyping() {
      const snippet = this.active;
      if (!snippet) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isMobile = window.matchMedia('(max-width: 767px)').matches;

      if (prefersReducedMotion || isMobile) {
        this.displayed = snippet.code;
        this.typing = false;
        this.syncHighlight();
        return;
      }

      this.displayed = '';
      this.highlightedHtml = '';
      this.typing = true;
      let index = 0;
      const full = snippet.code;

      this.timer = window.setInterval(() => {
        if (index < full.length) {
          this.displayed += full.charAt(index);
          index += 1;
          this.syncHighlight();
        } else {
          this.stopTyping();
          this.syncHighlight();
        }
      }, TYPING_INTERVAL_MS);
    },

    stopTyping() {
      if (this.timer !== null) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.typing = false;
    },

    initWhenVisible() {
      if (this.started) return;
      this.started = true;
      this.runTyping();
    },
  });
}
