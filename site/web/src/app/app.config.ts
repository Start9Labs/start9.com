import {
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideHttpClient, withFetch } from '@angular/common/http'
import {
  provideTaiga,
  TUI_APPEARANCE_OPTIONS,
  tuiButtonOptionsProvider,
  tuiDropdownOptionsProvider,
} from '@taiga-ui/core'
import { tuiDialogOptionsProvider } from '@taiga-ui/core'
import { provideApollo } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { InMemoryCache } from '@apollo/client/core'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideTaiga({ scrollbars: 'native' }),
    tuiButtonOptionsProvider({ size: 'm' }),
    tuiDropdownOptionsProvider({ appearance: 'start-os' }),
    tuiDialogOptionsProvider({ appearance: 'start-os', size: 's' }),
    {
      provide: TUI_APPEARANCE_OPTIONS,
      useValue: { appearance: 'neutral' },
    },
    provideHttpClient(withFetch()),
    provideApollo(() => {
      const httpLink = inject(HttpLink)
      return {
        link: httpLink.create({ uri: '/shop-api' }),
        cache: new InMemoryCache(),
      }
    }),
  ],
}
