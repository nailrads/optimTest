import IBanner from "~/interfaces/Banner/IBanner";

export const side: IBanner = {
    mobile: null,
    desktop: {
        id: 'side',
        timer: {
            show: null,
            refresh: 30
        },
        sizes: [[300, 500], [300, 250], [300, 600], [1, 2], [240, 400]]
    }
};
