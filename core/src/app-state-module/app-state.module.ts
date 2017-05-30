/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   21-05-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 30-05-2017
 */

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Import ngrx Tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Import ngRx Store
import { reducer } from './reducers';
import { AuthEffects } from './effects/authEffects';
import { DatasEffects } from './effects/datasEffects';
import { ErrorEffects } from './effects/errorEffects';

import { MainActions } from './actions/mainActions';

// Import Providers Service
import { DatasService } from "../services/datas-service/datas.service";
import { AuthService } from "../services/auth-service/auth.service";
import { AlertService } from "../services/alert-service/alert.service";

const providers:Array<any> =  [
    DatasService,
    AuthService,
    AlertService,
];
const effects:Array<any> = [
    AuthEffects,
    DatasEffects,
    ErrorEffects
];
const actions:Array<any> = [
    MainActions
];

@NgModule({
  imports: [
    HttpModule,
    EffectsModule.runAfterBootstrap(AuthEffects),
    EffectsModule.runAfterBootstrap(DatasEffects),
    EffectsModule.runAfterBootstrap(ErrorEffects),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  declarations: [],
  providers: [...providers, ...effects, ...actions]
})
export class AppStateModule { }
