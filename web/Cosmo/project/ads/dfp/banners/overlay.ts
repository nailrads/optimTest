import IBanner from "~/interfaces/Banner/IBanner";

export const overlay: IBanner = {
    mobile: {
        id: 'mob-overlay',
        timer: null,
        sizes: [[1, 1]]
    },
    desktop: {
        id: 'overlay',
        timer: null,
        sizes: [[1, 1], [2, 1]]
    }
};
