/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   17-04-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 10-08-2017
*/

import { Action } from "@ngrx/store";
import { MainActions } from '../actions/mainActions';

export interface ILoadedState extends Boolean {};

export const intitialState:ILoadedState = false;

export function reducer (state:ILoadedState = intitialState, action:any):ILoadedState {
  //console.log('LOADED REDUCER-> ', action);
  switch (action.type) {
    case MainActions.GET_DATAS_ARRAY: {
      return false
    }
    case MainActions.GET_DATAS_ARRAY_SUCCESS: {
      return true
    }
    case MainActions.GET_DATAS_ARRAY_FAILED: {
      return false
    }

    case MainActions.UPDATE_DATA: {
      return false
    }
    case MainActions.UPDATE_DATA_SUCCESS: {
      return true
    }
    case MainActions.UPDATE_DATA_FAILED: {
      return false
    }

    case MainActions.DELETE_DATA: {
      return false
    }
    case MainActions.DELETE_DATA_SUCCESS: {
      return true
    }
    case MainActions.DELETE_DATA_FAILED: {
      return false
    }

    case MainActions.CREATE_DATA: {
      return false
    }
    case MainActions.CREATE_DATA_SUCCESS: {
      return true
    }
    case MainActions.CREATE_DATA_FAILED: {
      return false
    }

    case MainActions.CHECK_AUTH_SUCCESS: {
      return true
    }
    case MainActions.CHECK_AUTH_FAILED: {
      return false
    }
    case MainActions.CHECK_AUTH_NO_USER: {
      return false
    }

    case MainActions.LOGIN: {
     return false
    }
    case MainActions.LOGIN_SUCCESS: {
     return true
    }
    case MainActions.LOGIN_FAILED: {
     return false
    }

    case MainActions.LOGOUT: {
      return false
    }
    case MainActions.LOGOUT_SUCCESS: {
      return true
    }
    default: {
      return <ILoadedState>state;
    }
  }
};
