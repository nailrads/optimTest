import { ActionContext } from 'vuex';

import IState from '@/interfaces/IState';

const fetchAuthors = async (context: ActionContext<IState, IState>, payload: {page: number}) => {
  try {
    const {authors} = await context.dispatch(
      'backendTalker',
      {
        request: 'authorsList',
        payload: payload
      }
    );
    context.commit('setAuthors', authors);
  } catch (err) {
    return err;
    // throw new Error(err)
  }
};

export default fetchAuthors;
