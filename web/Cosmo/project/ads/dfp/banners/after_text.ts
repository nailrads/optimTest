import IBanner from "~/interfaces/Banner/IBanner";

export const after_text: IBanner = {
    mobile: {
        id: 'mob-after-text',
        timer: null,
        sizes: [[320, 100], [300, 250], [336, 280], [320, 50]]
    },
    desktop: null
    // desktop: {
    //     id: 'after-text',
    //     timer: {
    //         show: null,
    //         refresh: 30
    //     },
    //     sizes: [[1, 2], [300, 250], [320, 100], [320, 50], [728, 90]]
    // }
};
