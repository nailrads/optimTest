import IBanner from "~/interfaces/Banner/IBanner";

export const billboard_topline: IBanner = {
    mobile: {
        id: 'mob-billboard-topline',
        timer: null,
        sizes: [[320, 50], [336, 280], [320, 100], [1, 2], [300, 250]]
    },
    desktop: {
        id: 'billboard-topline',
        timer: null,
        sizes: [[1000, 90], [1260, 250], [1290, 200], [1350, 270], [1, 2], [1350, 200], [980, 120], [1290, 270], [970, 250], [1350, 250], [980, 90], [970, 90], [1000, 250], [728, 90], [1290, 250]]
    }
};
