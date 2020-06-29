import IState from '@/interfaces/IState';

export default (state: IState, payload: string) => {
    const indexAd = state.ads.adsList.findIndex((ad:string) => ad === payload);
    if(indexAd > 0) {
        state.ads.adsList.splice(indexAd, 1);
    }
}
