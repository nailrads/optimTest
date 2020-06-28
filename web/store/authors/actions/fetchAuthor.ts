import {ActionContext} from 'vuex';

import IAuthor from "@/interfaces/IAuthor";
import IState from '@/interfaces/IState';

const fetchAuthor = async (context: ActionContext<IState, IState>, payload: { id: number }) => {
  try {
    const author: IAuthor = await context.dispatch(
      'backendTalker',
      {
        request: 'authorDetail',
        payload: payload
      }
    );
    return author;
  } catch (err) {
    return err;
    // throw new Error(err)
  }
};

export default fetchAuthor;
