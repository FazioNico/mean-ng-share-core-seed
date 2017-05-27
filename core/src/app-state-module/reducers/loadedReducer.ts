/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   17-04-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-05-2017
*/

import { Action } from "@ngrx/store";
import { MainActions } from '../actions/mainActions';

export interface ILoadedState extends Boolean {};

export const intitialState:ILoadedState = false;

export function reducer (state:ILoadedState = intitialState, action:Action):ILoadedState {
  //console.log('LOADED REDUCER-> ', action);
  switch (action.type) {
    case MainActions.GET_DATAS_ARRAY: {
      return Object.assign(false)
    }
    case MainActions.GET_DATAS_ARRAY_SUCCESS: {
      return Object.assign(true)
    }
    case MainActions.GET_DATAS_ARRAY_FAILED: {
      return Object.assign(false)
    }

    case MainActions.UPDATE_DATA: {
      return Object.assign(false)
    }
    case MainActions.UPDATE_DATA_SUCCESS: {
      return Object.assign(true)
    }
    case MainActions.UPDATE_DATA_FAILED: {
      return Object.assign(false)
    }

    case MainActions.DELETE_DATA: {
      return Object.assign(false)
    }
    case MainActions.DELETE_DATA_SUCCESS: {
      return Object.assign(true)
    }
    case MainActions.DELETE_DATA_FAILED: {
      return Object.assign(false)
    }

    case MainActions.CREATE_DATA: {
      return Object.assign(false)
    }
    case MainActions.CREATE_DATA_SUCCESS: {
      return Object.assign(true)
    }
    case MainActions.CREATE_DATA_FAILED: {
      return Object.assign(false)
    }

    case MainActions.CHECK_AUTH_SUCCESS: {
      return Object.assign(true)
    }
    case MainActions.CHECK_AUTH_FAILED: {
      return Object.assign(false)
    }
    case MainActions.CHECK_AUTH_NO_USER: {
      return Object.assign(false )
    }

    case MainActions.LOGIN: {
     return Object.assign(false)
    }
    case MainActions.LOGIN_SUCCESS: {
     return Object.assign(true)
    }
    case MainActions.LOGIN_FAILED: {
     return Object.assign(false)
    }

    case MainActions.LOGOUT: {
      return Object.assign(false)
    }
    case MainActions.LOGOUT_SUCCESS: {
      return Object.assign(true)
    }
    default: {
      return <ILoadedState>state;
    }
  }
};
