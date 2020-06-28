import { ActionContext } from 'vuex';

import IState from '@/interfaces/IState';
import IPost from "@/interfaces/posts/IPost";

const nuxtServerInit = async (context: ActionContext<IState, IState>) => {
  try {
    // const env = process.env.NUXT_ENV_API_HOST;
  } catch (err) {
    return err;
    // throw new Error(err)
  }
};

export default nuxtServerInit;
