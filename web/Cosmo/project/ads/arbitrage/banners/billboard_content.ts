import IBanner from "~/interfaces/Banner/IBanner";

export const billboard_content: IBanner = {
    mobile: {
        id: 'mob-content-billboard',
        timer: {
            show: null,
            refresh: 30
        },
        sizes: [[1, 2], [300, 300], [300, 250], [336, 280], [320, 100]]
    },
    desktop: {
        id: 'content-billboard',
        timer: null,
        sizes: [[1, 2], [728, 90]]
    }
};
