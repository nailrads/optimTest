import IBanner from "~/interfaces/Banner/IBanner";

export const gallery: IBanner = {
    mobile: {
        id: 'mob-gallery',
        timer: null,
        sizes: [[336, 280], [320, 100], [300, 250], [300, 300], [320, 50]]
    },
    desktop: {
        id: 'gallery',
        timer: null,
        sizes: [[300, 250], [240, 400], [300, 600]]
    }
};
