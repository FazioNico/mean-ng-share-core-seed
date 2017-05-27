/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   26-05-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 26-05-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Login } from './login';

@NgModule({
  declarations: [
    Login,
  ],
  imports: [
    IonicPageModule.forChild(Login),
  ],
  exports: [
    Login
  ]
})
export class LoginModule {}
