import IQueries from '@/interfaces/api/IQueries';

const posts: IQueries = {
  postsList: {
    path: '/articles',
    method: 'GET'
  },
  postDetail: {
    path: '/',
    method: 'GET'
  },
  readMore: {
    path: '/articles/read-more',
    method: 'GET'
  }
};

export default posts;
