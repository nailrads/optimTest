import fetchAuthor from './actions/fetchAuthor';
import fetchAuthors from './actions/fetchAuthors';
import getAuthors from './getters/getAuthors';
import setAuthors from './mutations/setAuthors';

const state = () => ({
  authors: []
});

const actions = {
  fetchAuthors,
  fetchAuthor
};

const mutations = {
  setAuthors
};

const getters = {
  getAuthors
};

export default { state, actions, mutations, getters }
