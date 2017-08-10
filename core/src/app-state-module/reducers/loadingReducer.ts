/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   14-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 10-08-2017
 */

 import { Action } from "@ngrx/store";
 import { MainActions } from '../actions/mainActions';

 export interface ILoadingState extends Boolean {};

 export const intitialState:ILoadingState = false

 export function reducer (state:ILoadingState = intitialState, action:any):ILoadingState {
     //console.log('LOADER REDUCER-> ', action);
     switch (action.type) {

       case MainActions.GET_DATAS_ARRAY: {
         return true
       }
       case MainActions.GET_DATAS_ARRAY_SUCCESS: {
         return false
       }
       case MainActions.GET_DATAS_ARRAY_FAILED: {
         return false
       }

       case MainActions.UPDATE_DATA: {
         return true
       }
       case MainActions.UPDATE_DATA_SUCCESS: {
         return false
       }
       case MainActions.UPDATE_DATA_FAILED: {
         return false
       }

       case MainActions.DELETE_DATA: {
         return true
       }
       case MainActions.DELETE_DATA_SUCCESS: {
         return false
       }
       case MainActions.DELETE_DATA_FAILED: {
         return false
       }

       case MainActions.CREATE_DATA: {
         return true
       }
       case MainActions.CREATE_DATA_SUCCESS: {
         return false
       }
       case MainActions.CREATE_DATA_FAILED: {
         return false
       }

       case MainActions.CHECK_AUTH: {
         return true
       }
       case MainActions.CHECK_AUTH_SUCCESS: {
         return false
       }
       case MainActions.CHECK_AUTH_FAILED: {
         return false
       }
       case MainActions.CHECK_AUTH_NO_USER: {
         return false
       }

       case MainActions.LOGIN: {
         return true
       }
       case MainActions.LOGIN_SUCCESS: {
         return false
       }
       case MainActions.LOGIN_FAILED: {
         return false
       }

       case MainActions.LOGOUT: {
         return true
       }
       case MainActions.LOGOUT_SUCCESS: {
         return false
       }

       default: {
         return <ILoadingState>state;
       }
     }
 };
