import Vue from 'vue'
import {Route} from 'vue-router'
import {Dictionary} from 'vue-router/types/router';
import {Store} from 'vuex'

export default interface IContext {
  app: Vue,
  isClient: boolean,
  isServer: boolean,
  isStatic: boolean,
  isDev: boolean,
  isHMR: boolean,
  route: Route,
  store: Store<any>,
  env: Object,
  params: Dictionary<string>,
  query: Dictionary<string>,
  req: Request,
  res: Response,
  redirect: Function,
  error: Function
  nuxtState: Object,
  beforeNuxtRender: Function
}
