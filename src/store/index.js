import { createPinia } from 'pinia';
import { useAuthStore } from './auth';

const pinia = createPinia();

pinia.useStore(useAuthStore);

export default pinia;
