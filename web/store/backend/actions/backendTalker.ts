import {ActionContext} from "vuex";

import backendParams from '~/middleware/api/requests';
import GET from "~/middleware/api/methods/GET";

import IState from "~/interfaces/IState";

interface IBackendRequestParams {
    request: string;
    payload: any;
}

export default async ({$axios}:any, params: IBackendRequestParams): Promise<any> => {
    const payload = params.payload || {};

    const apiHost = process.env.APP_WEB_API_HOST;
    const apiVersion = process.env.NUXT_ENV_API_VERSION;
    const currentRequest = backendParams[params.request];

    const pagination = payload.page ? `?page=${payload.page}` : '';

    const id = payload.id || '';

    const requestURL = `${apiHost}${apiVersion}${currentRequest.path}${pagination}${id}`;

    // console.log('requestURL',requestURL)
    switch (currentRequest.method) {
        case 'GET':
            return await GET($axios, {path: requestURL, payload});
        case 'POST':
            return await GET($axios, {path: requestURL, payload});
        // default:
        //     return await GET(context, {path: requestURL, payload})
    }

};
