/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   14-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 30-05-2017
 */

 import { Action } from "@ngrx/store";
 import { MainActions } from '../actions/mainActions';

 export interface ICurrentUserState extends Object {};

 export const intitialState:ICurrentUserState = null

 export function reducer (state:ICurrentUserState = intitialState, action:Action):ICurrentUserState {
     //console.log('CURRENT USER REDUCER-> ', action);
     switch (action.type) {
       case MainActions.LOGIN_SUCCESS:{
          return Object.assign({}, state,  action.payload.user)
       }
       case MainActions.CHECK_AUTH_SUCCESS:{
          return Object.assign({}, state, action.payload )
       }
       case MainActions.LOGOUT_SUCCESS:{
          return intitialState
       }

       case MainActions.CREATE_USER_SUCCESS:{
          return Object.assign({},  action.payload.user )
       }
       default: {
         return <ICurrentUserState>state;
       }
     }
 };
