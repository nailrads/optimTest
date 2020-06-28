import backendTalker from './actions/backendTalker';
import nuxtServerInit from './actions/nuxtServerInit';
import getApiHost from './getters/getApiHost';
import setApiHost from './mutations/setApiHost';

const state = () => ({
  apiHost: ''
});

const actions = {
  backendTalker,
  nuxtServerInit
};

const mutations = {
  setApiHost
};

const getters = {
  getApiHost
};

export default { state, actions, mutations, getters }
