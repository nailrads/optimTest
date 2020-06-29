import IBannerParams from "~/interfaces/Banner/IBannerParams";

export default interface IBanner {
    [key:string]: IBannerParams | null;
}
