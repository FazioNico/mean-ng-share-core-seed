/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   23-05-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 23-05-2017
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStateModule } from "./app-state-module/app-state.module";
import { EnvironmentsModule } from "./environment/environment.module";

@NgModule({
  imports:[
    CommonModule,
    AppStateModule,
    EnvironmentsModule
  ]
})
export class CoreModule {}
