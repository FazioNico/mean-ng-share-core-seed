/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   09-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 10-06-2017
 */

 import { InjectionToken } from "@angular/core";
 import { IEnvironment } from "../../../environment";
 // import { IEnvironment } from "env";

 export let EnvVariables = new InjectionToken<IEnvironment>( 'env.variables' );
