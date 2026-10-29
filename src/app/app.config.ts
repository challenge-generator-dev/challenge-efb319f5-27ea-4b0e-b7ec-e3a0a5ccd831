import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { cloudArchitectureReducer } from './core/store/cloud-architecture.reducer';
import { CloudArchitectureEffects } from './core/store/cloud-architecture.effects';
import { CloudArchitectureService } from './core/services/cloud-architecture.service';
import { ArchitectureStyleModel } from './core/models/architecture-style.model';
import { TacticModel } from './core/models/tactic.model';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideStore({
      cloudArchitecture: cloudArchitectureReducer
    }),
    provideEffects([CloudArchitectureEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75
    }),
    {
      provide: CloudArchitectureService,
      useClass: CloudArchitectureService,
      deps: [HttpClient]
    },
    {
      provide: ArchitectureStyleModel,
      useClass: ArchitectureStyleModel
    },
    {
      provide: TacticModel,
      useClass: TacticModel
    }
  ]
};