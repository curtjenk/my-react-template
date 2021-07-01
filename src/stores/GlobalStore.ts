import { createState } from '@hookstate/core';
import { Persistence } from '@hookstate/persistence';
import JwtResponse from '../app/models/JwtResponse';

export type GlobalStateType = {
    isAuthenticated?: boolean;
    userName?: any;
    tokenData?: JwtResponse;
    redirectPath: string;

  }
  
export const inititalState: GlobalStateType = {
    redirectPath: ''
};

const globalState = createState<GlobalStateType>(inititalState);
globalState.attach(Persistence('global-state'));

export default globalState;
