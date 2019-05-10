import {
  ComponentFactoryResolver,
  enableProdMode,
  ErrorHandler,
  Injector,
  isDevMode,
  NgZone,
  PlatformRef,
  Sanitizer,
  StaticProvider,
  ɵcreateInjector as createInjector,
  ɵLifecycleHooksFeature as LifecycleHooksFeature,
  ɵrenderComponent as renderComponent,
} from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

// NoopAnimationsModule

const platform: PlatformRef = platformBrowser();
const ngZoneInjector: Injector = Injector.create([
  {
    deps: [],
    provide: NgZone,
    useFactory: (): NgZone =>
      new NgZone({
        enableLongStackTrace: isDevMode() || !!(window as any).ngDevMode,
      }),
  },
], platform.injector);
const extraProviders: StaticProvider[] = [
  {
    deps: [],
    provide: ErrorHandler,
    useClass: ErrorHandler,
  },
  {
    provide: ComponentFactoryResolver,
    useValue: ComponentFactoryResolver.NULL,
  },
];
const rootInjector: Injector =
  createInjector(BrowserAnimationsModule, ngZoneInjector, extraProviders, 'root');

renderComponent(AppComponent, {
  hostFeatures: [
    LifecycleHooksFeature,
  ],
  injector: rootInjector,
  sanitizer: rootInjector.get(Sanitizer),
});
