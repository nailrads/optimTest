import IBannerTimer from "~/interfaces/Banner/IBannerTimer";

export default interface IBannerParams {
    readonly id: string;
    readonly timer: IBannerTimer | null;
    readonly sizes: Array<[number, number]>;
}
