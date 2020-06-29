import {ActionContext} from 'vuex';

import IState from '@/interfaces/IState';
import IPost from "@/interfaces/posts/IPost";

const authorDefault = {
    name: 'Cosmo Online',
    description: 'терапевт клиники пластической микрохирургии “Абра-Кадабра” \n',
    image: {
        default: {
            source: {
                init: '/images/cosmo_online.png',
                webp: '/images/cosmo_online.webp',
            }
        },
        retina: {
            source: {
                init: '/images/cosmo_online.png',
                webp: '/images/cosmo_online.webp',
            }
        }
    },
};

const fetchPost = async (context: ActionContext<IState, IState>, payload: { id: number }) => {
  try {
    const post: IPost | any = await context.dispatch(
      'backendTalker',
      {
        request: 'postDetail',
        payload
      }
    );

    if(post.article.author) {
        post.article.author.image = post.article.author.image ? post.article.author.image: authorDefault.image;
        post.article.author.name = post.article.author.name ? post.article.author.name: authorDefault.name;
        post.article.author.description = post.article.author.description ? post.article.author.description: authorDefault.description;
    } else {
        post.article.author = authorDefault
    }

    return post;
  } catch (err) {
    return err;
    // throw new Error(err)
  }
};

export default fetchPost;
