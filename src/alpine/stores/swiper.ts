import type { Alpine } from 'alpinejs';
import Swiper from 'swiper';
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

export function registerSwiperStore(Alpine: Alpine) {
  Alpine.store('swiper', {
    instances: {} as Record<string, Swiper>,

    defaults: {
      modules: [Navigation, Pagination, Keyboard, A11y],
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 800,
      grabCursor: true,
      effect: 'slide',
      watchOverflow: true,
      breakpoints: {
        640: {
          slidesPerView: 1.05,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2.2,
          spaceBetween: 40,
        },
      },
    } satisfies SwiperOptions,

    init(id: string, el: HTMLElement, options: SwiperOptions = {}) {
      if (this.instances[id]) {
        return this.instances[id];
      }

      this.instances[id] = new Swiper(el, {
        ...this.defaults,
        ...options,
      });

      return this.instances[id];
    },

    get(id: string) {
      return this.instances[id];
    },

    slideTo(id: string, index: number) {
      this.instances[id]?.slideTo(index);
    },

    destroy(id: string) {
      this.instances[id]?.destroy(true, true);
      delete this.instances[id];
    },

    destroyAll() {
      Object.keys(this.instances).forEach((id) => this.destroy(id));
    },
  });
}
