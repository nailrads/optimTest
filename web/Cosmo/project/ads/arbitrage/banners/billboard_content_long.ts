import IBanner from "~/interfaces/Banner/IBanner";

export const billboard_content_long: IBanner = {
    mobile: null,
    desktop: {
        id: 'content-billboard-long',
        timer: {
            show: null,
            refresh: 30
        },
        sizes: [[970, 250], [970, 90], [728, 90]]
    }
};
