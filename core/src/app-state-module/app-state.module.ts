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
// import { ErrorEffects } from './effects/errorEffects';

import { MainActions } from './actions/mainActions';

// Import Providers Service
import { DatasService } from "../services/datas-service/datas.service";
import { AuthService } from "../services/auth-service/auth.service";

const providers:Array<any> =  [
    DatasService,
    AuthService,
];
const effects:Array<any> = [
    AuthEffects,
    DatasEffects
];
const actions:Array<any> = [
    MainActions
];

@NgModule({
  imports: [
    HttpModule,
    EffectsModule.runAfterBootstrap(AuthEffects),
    EffectsModule.runAfterBootstrap(DatasEffects),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  declarations: [],
  providers: [...providers, ...effects, ...actions]
})
export class AppStateModule { }
