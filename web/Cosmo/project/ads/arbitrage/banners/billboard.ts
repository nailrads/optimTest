import IBanner from "~/interfaces/Banner/IBanner";

export const billboard: IBanner = {
    mobile: {
        id: 'mob-billboard',
        timer: {
            show: null,
            refresh: 30
        },
        sizes: [[300, 250], [320, 100], [336, 280], [1, 2], [320, 50]]
    },
    desktop: {
        id: 'billboard',
        timer: {
            show: null,
            refresh: 30
        },
        sizes: [[970, 90], [1290, 250], [980, 120], [1290, 270], [728, 90], [980, 90], [1350, 250], [1000, 250], [1, 2], [970, 250], [1000, 90], [1290, 200], [1260, 250], [1350, 200], [1350, 270]]
    }
};
