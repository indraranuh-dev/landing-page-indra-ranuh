import type { Alpine } from 'alpinejs';

export function registerUiStore(Alpine: Alpine) {
  Alpine.store('ui', {
    menuOpen: false,
    scrolled: false,
    logoMorph: false,
    stackFilter: 'all' as 'all' | 'backend' | 'frontend' | 'integrations',

    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      document.body.classList.toggle('overflow-hidden', this.menuOpen);
    },

    closeMenu() {
      this.menuOpen = false;
      document.body.classList.remove('overflow-hidden');
    },

    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },

    setStackFilter(filter: typeof this.stackFilter) {
      this.stackFilter = filter;
    },

    get navClass() {
      if (this.scrolled) {
        return 'glass-nav border-b border-white/5 bg-black/90 backdrop-blur-md';
      }
      return 'border-b border-transparent bg-black/70 backdrop-blur-sm';
    },
  });
}
