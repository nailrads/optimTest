import IBanner from "~/interfaces/Banner/IBanner";

export const billboard_content: IBanner = {
    mobile: {
        id: 'mob-content-billboard',
        timer: null,
        sizes: [[336, 280], [320, 100], [300, 300], [300, 250]]
    },
    desktop: {
        id: 'content-billboard',
        timer: null,
        sizes: [[1, 2], [300, 250], [320, 100], [320, 50], [728, 90]]
    }
};
