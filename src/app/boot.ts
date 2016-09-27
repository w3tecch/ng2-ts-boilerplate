/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app.module.ts';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
/*export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

// needed for hmr
// in prod this is replace for document ready
bootloader(main);*/

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
