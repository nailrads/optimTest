import fetchReadMore from './actions/fetchReadMore';
import fetchPost from './actions/fetchPost';
import fetchPosts from './actions/fetchPosts';
import getPosts from './getters/getPosts';
import setPosts from './mutations/setPosts';

const state = () => ({
  posts: []
});

const actions = {
  fetchReadMore,
  fetchPosts,
  fetchPost
};

const mutations = {
  setPosts
};

const getters = {
  getPosts
};

export default { state, actions, mutations, getters }
