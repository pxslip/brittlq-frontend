import { AxiosStatic } from 'axios';
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $axios: AxiosStatic;
  }
}

declare module 'pinia' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface DefineStoreOptionsBase<S, Store> {
    persist?: {
      enabled: boolean;
      storage?: StorageName;
      key?: string;
      reducer?: (state: S) => Partial<S>;
      persister?: Persister;
      hydrater?: (
        storedState: string,
        context: PiniaPluginContext<string, S>
      ) => Partial<S>;
    };
  }
}
