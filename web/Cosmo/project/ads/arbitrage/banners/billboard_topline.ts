import IBanner from "~/interfaces/Banner/IBanner";

export const billboard_topline: IBanner = {
    mobile: {
        id: 'mob-billboard-topline',
        timer: null,
        sizes: [[320, 50], [1, 2], [300, 250], [320, 100], [336, 280]]
    },
    desktop: {
        id: 'billboard-topline',
        timer: null,
        sizes: [[1, 2], [1260, 250], [1290, 200], [1350, 200], [970, 250], [980, 120], [1290, 270], [980, 90], [1350, 250], [1000, 250], [970, 90], [728, 90], [1290, 250], [1350, 270], [1000, 90]]
    }
};
