import { ActionContext } from 'vuex';

import IState from '@/interfaces/IState';
import IPost from "@/interfaces/posts/IPost";

const fetchPosts = async (context: ActionContext<IState, IState>, payload: {page: number}) => {
  try {
    const articles = await context.dispatch(
      'backendTalker',
      {
        request: 'postsList',
        payload: payload
      }
    );
    console.log('articles', articles)
    return articles;
    // context.commit('setPosts', articles);
  } catch (err) {
    return err;
    // throw new Error(err)
  }
};

export default fetchPosts;
