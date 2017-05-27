/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   14-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-05-2017
 */

 import { Action } from "@ngrx/store";
 import { MainActions } from '../actions/mainActions';
 import { ITodo } from '../../services/datas-service/datas.service';

 export interface IDatasState extends Array<ITodo>{}

 export const intitialState:IDatasState = []

 export function reducer (state:IDatasState = intitialState, action:Action):IDatasState {
     //console.log('ARRAY DATAS REDUCER-> ', action);
     switch (action.type) {
       case MainActions.GET_DATAS_ARRAY: {
         return Object.assign([], state)
       }
       case MainActions.GET_DATAS_ARRAY_SUCCESS: {
         return Object.assign([], [...action.payload])
       }
       case MainActions.UPDATE_DATA_SUCCESS: {
         return Object.assign([], [...state.map((item: any) => {
              return item._id === action.payload.response._id ? action.payload.response : item;
            })
         ])
       }
       case MainActions.DELETE_DATA_SUCCESS: {
         return Object.assign([], [...state.filter((item: any) => {
             return item._id !== action.payload.queryParams.params._id;
           })]
         )
       }
       case MainActions.CREATE_DATA_SUCCESS: {
         return Object.assign([], [...state, action.payload])
       }

       case MainActions.LOGOUT_SUCCESS: {
         return Object.assign([], intitialState)
       }
       default: {
         return <IDatasState>state;
       }
     }
 };
