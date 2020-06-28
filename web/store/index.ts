import Backend from './backend/index';
import Authors from './authors/index';
import Posts from './posts/index';
import IState from "~/interfaces/IState";

export const state = () => ({
  showSidebar: false,

  ...Authors.state,
  ...Posts.state,
});

export const actions = {
  ...Backend.actions,
  ...Authors.actions,
  ...Posts.actions,
};

export const mutations = {
  setShowSidebar(state:IState, value:boolean) {
    state.showSidebar = value
  },
  // clearToken(state) {
  //   state.token = null
  // },

  ...Backend.mutations,
  ...Authors.mutations,
  ...Posts.mutations,
};

export const getters = {
  showSidebar: (state:IState) => state.showSidebar,

  ...Backend.getters,
  ...Authors.getters,
  ...Posts.getters,
};
