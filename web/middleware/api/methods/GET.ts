import axios from 'axios';
import {ActionContext} from 'vuex';
import {handlerError, handlerSuccess} from '~/middleware/api/handlers/index';

import IState from "~/interfaces/IState";

interface IBackendRequestParams {
  path: string;
  payload: any;
}

export default async (context: ActionContext<IState, IState>, params: IBackendRequestParams): Promise<any> => {
  try {
    const options = {
      headers: {
        // 'Authorization': `Basic ${btoa('dev:developer')}`
      },
      payload: params.payload
    };
    const response = await axios.get(params.path, options);
    return handlerSuccess(response.data);
  } catch (error) {
    return Promise.reject(handlerError(context, error));
  }
};
