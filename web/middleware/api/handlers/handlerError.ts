import {AxiosError} from 'axios';
import {ActionContext} from 'vuex';

import IState from "~/interfaces/IState";

export default (context: ActionContext<IState, IState>, error: AxiosError): AxiosError => {

  const catchDeadToken = (error: AxiosError) => {
    // Catching dead token. Logging user out
    if (
      error.response &&
      error.response.data &&
      error.response.status === 401
    ) {
      // context.dispatch('logout');
    }
  };

  catchDeadToken(error);
  return error;

};
