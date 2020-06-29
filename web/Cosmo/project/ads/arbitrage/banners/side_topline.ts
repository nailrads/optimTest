import IBanner from "~/interfaces/Banner/IBanner";

export const side_topline: IBanner = {
    mobile: null,
    desktop: {
        id: 'side-topline',
        timer: {
            show: null,
            refresh: 30
        },
        sizes: [[1, 2], [300, 600], [300, 500], [300, 250], [240, 400]]
    }
};
