import {ActionContext} from 'vuex';

import IState from '@/interfaces/IState';
import IPost from "~/interfaces/posts/IPost";

const fetchReadMore = async (context: ActionContext<IState, IState>, payload: {}) => {
  try {
    const article: IPost = await context.dispatch(
      'backendTalker',
      {
        request: 'readMore',
        payload: payload
      }
    );
    return article;
  } catch (err) {
    return err;
    // throw new Error(err)
  }
};

export default fetchReadMore;
