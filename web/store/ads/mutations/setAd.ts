import IState from '@/interfaces/IState';

export default (state: IState, payload: string) => state.ads.adsList.push(payload);
