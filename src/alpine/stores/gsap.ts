import type { Alpine } from 'alpinejs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function registerGsapStore(Alpine: Alpine) {
  Alpine.store('gsap', {
    ready: false,
    mm: null as ReturnType<typeof gsap.matchMedia> | null,

    init() {
      if (this.ready) return;

      gsap.registerPlugin(ScrollTrigger);
      this.mm = gsap.matchMedia();
      this.ready = true;

      this.mm.add('(min-width: 1024px)', () => {
        this.initDesktopScrollAnimations();
        return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      });
    },

    initPageAnimations(root: HTMLElement) {
      const hero = root.querySelector('.reveal-hero');
      if (hero?.children.length) {
        gsap.from(hero.children, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power4.out',
        });
      }

      const stats = root.querySelector('.reveal-stats');
      if (stats) {
        gsap.from(stats, {
          y: 40,
          opacity: 0,
          duration: 1,
          delay: 0.8,
          ease: 'power3.out',
        });
      }
    },

    initDesktopScrollAnimations() {
      const philosophy = document.querySelector('#philosophy');
      const revealPhil = document.querySelector('.reveal-phil');
      const revealPhilCard = document.querySelector('.reveal-phil-card');

      if (philosophy && revealPhil) {
        gsap.from(revealPhil, {
          scrollTrigger: { trigger: philosophy, start: 'top 75%' },
          x: -30,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      }

      if (philosophy && revealPhilCard) {
        gsap.from(revealPhilCard, {
          scrollTrigger: { trigger: philosophy, start: 'top 75%' },
          x: 30,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      }

      gsap.utils.toArray<HTMLElement>('section h2, section p').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 90%' },
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      });
    },

    heroReveal(root: HTMLElement) {
      const lines = root.querySelectorAll('[data-hero-line]');
      if (!lines.length) return;

      return gsap.from(lines, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
      });
    },

    killScrollTriggers() {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    },
  });
}
