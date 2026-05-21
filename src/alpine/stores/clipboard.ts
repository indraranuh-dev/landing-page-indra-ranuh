import type { Alpine } from 'alpinejs';

const EMAIL = 'indraranuh1@gmail.com';

export function registerClipboardStore(Alpine: Alpine) {
  Alpine.store('clipboard', {
    copied: false,
    email: EMAIL,
    timeout: null as ReturnType<typeof setTimeout> | null,

    async copy(text: string = EMAIL) {
      try {
        await navigator.clipboard.writeText(text);
        this.copied = true;
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch {
        window.location.href = `mailto:${text}`;
      }
    },
  });
}
