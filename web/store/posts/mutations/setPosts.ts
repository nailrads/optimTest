import IPost from '@/interfaces/posts/IPost';
import IState from '@/interfaces/IState';

export default (state: IState, payload: IPost) => state.posts = payload;
