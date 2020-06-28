import IState from '@/interfaces/IState';

export default (state: IState, payload: string) => {
  state.apiHost = payload;
}
