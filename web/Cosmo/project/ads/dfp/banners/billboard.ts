import IBanner from "~/interfaces/Banner/IBanner";

export const billboard: IBanner = {
    mobile: {
        id: 'mob-billboard',
        timer: null,
        sizes: [[336, 280], [320, 100], [300, 250], [320, 50]]
    },
    desktop: {
        id: 'billboard',
        timer: null,
        sizes: [[728, 90], [970, 250], [1290, 250], [1350, 200], [1000, 90], [980, 120], [1290, 270], [1350, 270], [970, 90], [1000, 250], [1260, 250], [1290, 200], [1350, 250], [980, 90]]
    }
};
