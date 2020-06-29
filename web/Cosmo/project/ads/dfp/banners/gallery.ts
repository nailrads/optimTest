import IBanner from "~/interfaces/Banner/IBanner";

export const gallery: IBanner = {
    mobile: {
        id: 'mob-gallery',
        timer: null,
        sizes: [[300, 300], [320, 50], [320, 100], [300, 250], [336, 280]]
    },
    desktop: {
        id: 'gallery',
        timer: null,
        sizes: [[300, 600], [300, 250], [240, 400]]
    }
};
