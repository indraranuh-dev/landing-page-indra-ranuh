import type { Alpine } from 'alpinejs';

import type { Project } from '../../data/projects';

export function registerProjectModalStore(Alpine: Alpine, projects: Project[]) {
  Alpine.store('projectModal', {
    activeId: null as string | null,
    projects,

    get active(): Project | null {
      if (!this.activeId) return null;
      return this.projects.find((p) => p.id === this.activeId) ?? null;
    },

    open(id: string) {
      this.activeId = id;
      document.body.classList.add('overflow-hidden');
      const swiper = Alpine.store('swiper') as { get: (key: string) => { disable: () => void } | undefined };
      swiper.get('projects')?.disable();
    },

    close() {
      this.activeId = null;
      document.body.classList.remove('overflow-hidden');
      const swiper = Alpine.store('swiper') as { get: (key: string) => { enable: () => void } | undefined };
      swiper.get('projects')?.enable();
    },
  });
}
