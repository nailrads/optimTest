import IBanner from "~/interfaces/Banner/IBanner";

export const side_long: IBanner = {
    mobile: null,
    desktop: {
        id: 'side-long',
        timer: {
            show: null,
            refresh: 30
        },
        sizes: [[300, 300], [300, 600], [1, 2], [300, 250], [240, 400]]
    }
};
