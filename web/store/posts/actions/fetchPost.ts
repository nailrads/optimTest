import {ActionContext} from 'vuex';

import IState from '@/interfaces/IState';
import IPost from "@/interfaces/posts/IPost";

const fetchPost = async (context: ActionContext<IState, IState>, payload: { id: number }) => {
  try {
    const post: IPost = await context.dispatch(
      'backendTalker',
      {
        request: 'postDetail',
        payload
      }
    );
    return post;
  } catch (err) {
    return err;
    // throw new Error(err)
  }
};

export default fetchPost;
