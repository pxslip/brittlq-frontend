import { AxiosStatic } from 'axios';
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $axios: AxiosStatic;
  }
}
