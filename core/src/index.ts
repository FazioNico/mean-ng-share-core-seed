/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   23-05-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 26-05-2017
 */

export { CoreModule } from './core.module';
export * from './app-state-module';
export { ITodo } from "./services/datas-service/datas.service";
export { EnvironmentsModule } from './environment/environment.module';
export { devVariables } from '../../environment/development';
export { prodVariables } from '../../environment/production';
export { IEnvironment } from '../../environment/env-model';
