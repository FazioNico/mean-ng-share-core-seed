/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   09-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 24-05-2017
 */

 import { NgModule } from '@angular/core';
 import { EnvVariables } from './environment.token';
 import { devVariables } from '../../../environment/development';
 import { prodVariables } from '../../../environment/production';
 import { IEnvironment } from "../../../environment/env-model";

 declare const process: any; // Typescript compiler will complain without this

 export function environmentFactory():IEnvironment {
   let env:IEnvironment = process.env.IONIC_ENV === 'prod' ? prodVariables : devVariables;
   process.env.IONIC_ENV != 'prod'? console.info('env->', env) : console.info("env-> ", env.environmentName);
   if(process.env.NODE_ENV === 'prod') { env = prodVariables };
   return env
 }

 @NgModule({
   providers: [
     {
       provide: EnvVariables,
       useFactory: environmentFactory
     }
   ]
 })
 export class EnvironmentsModule {}
