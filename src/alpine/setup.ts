import type { Alpine } from 'alpinejs';

import { codeSnippets } from '../data/codeSnippets';
import { projects } from '../data/projects';
import { registerCodePreviewStore } from './stores/codePreview';
import { registerClipboardStore } from './stores/clipboard';
import { registerGsapStore } from './stores/gsap';
import { registerProjectModalStore } from './stores/projectModal';
import { registerSwiperStore } from './stores/swiper';
import { registerUiStore } from './stores/ui';

export default (Alpine: Alpine) => {
  registerGsapStore(Alpine);
  registerCodePreviewStore(Alpine, codeSnippets);
  registerSwiperStore(Alpine);
  registerUiStore(Alpine);
  registerClipboardStore(Alpine);
  registerProjectModalStore(Alpine, projects);
};
