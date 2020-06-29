import IBanner from "~/interfaces/Banner/IBanner";

export const side_topline: IBanner = {
    mobile: null,
    desktop: {
        id: 'side-topline',
        timer: {
            show: null,
            refresh: 45
        },
        sizes: [[240, 400], [300, 600], [1, 2], [300, 250], [300, 500]]
    }
};
