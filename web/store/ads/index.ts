import getAdsList from './getters/getAdsList';
import setAd from './mutations/setAd';
import removeAd from './mutations/removeAd';

const state = () => ({
  adsList: []
});

const actions = {};

const mutations = {
  setAd,
  removeAd
};

const getters = {
  getAdsList
};

export default { state, actions, mutations, getters }
