declare module 'react-router-dom' {
  export * from 'react-router-dom/index';
  import { ComponentType } from 'react';
  import { SwitchProps, RouteProps, RedirectProps } from 'react-router-dom/index';
  
  export const Switch: ComponentType<SwitchProps>;
  export const Route: ComponentType<RouteProps>;
  export const Redirect: ComponentType<RedirectProps>;
}