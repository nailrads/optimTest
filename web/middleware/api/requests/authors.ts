import IQueries from '@/interfaces/api/IQueries';

const authors: IQueries = {
  authorsList: {
    path: '/authors',
    method: 'GET'
  },
  authorDetail: {
    path: '/authors/',
    method: 'GET'
  }
};

export default authors;
