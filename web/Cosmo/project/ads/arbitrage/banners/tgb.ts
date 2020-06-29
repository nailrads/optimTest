import IBanner from "~/interfaces/Banner/IBanner";

export const tgb: IBanner = {
    mobile: null,
    desktop: {
        id: 'tgb',
        timer: {
            show: null,
            refresh: 30
        },
        sizes: [[1, 2], [300, 300], [300, 250]]
    }
};
