import IBanner from "~/interfaces/Banner/IBanner";

export const after_text: IBanner = {
    mobile: {
        id: 'mob-after-text',
        timer: null,
        sizes: [[300, 250], [1, 2], [320, 50], [336, 280], [320, 100]]
    },
    desktop: {
        id: 'after-text',
        timer: {
            show: null,
            refresh: 30
        },
        sizes: [[1, 2], [728, 90], [740, 250]]
    }
};
