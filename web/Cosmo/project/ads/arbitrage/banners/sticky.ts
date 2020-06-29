import IBanner from "~/interfaces/Banner/IBanner";

export const sticky: IBanner = {
    mobile: {
        id: 'mob-sticky',
        timer: {
            show: 5,
            refresh: 30
        },
        sizes: [[300, 100], [300, 50], [320, 100], [1, 1], [320, 50]]
    },
    desktop: {
        id: 'sticky',
        timer: {
            show: 5,
            refresh: 30
        },
        sizes: [[970, 90], [728, 90], [980, 90], [1, 1], [960, 90]]
    },
};
