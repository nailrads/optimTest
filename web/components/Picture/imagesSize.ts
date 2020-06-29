export const getWidthDeviceForImage = (width: number) => {
    if (width >= 320 && 650 > width) {
        return 'XS';
    } else if (width >= 650 && 768 > width) {
        return 'S';
    } else if (width >= 768 && 1024 > width) {
        return 'M';
    } else if (width >= 1024 && 1920 > width) {
        return 'L';
    } else if (width >= 1920) {
        return 'XL';
    } else {
        return 'M';
    }
};

export const defaultSizes = {
    XS: 300,
    S: 600,
    M: 650,
    L: 510,
    XL: 666
};
export const internalMainImage = {
    XS: 300,
    S: 600,
    M: 650,
    L: 510,
    XL: 666
};

export const newsStarsSide = {
    XS: 132,
    S: 132,
    M: 136,
    L: 241,
    XL: 255
};

export const popBlock = {
    XS: 148,
    S: 196,
    M: 212,
    L: 220,
    XL: 222
};

// Preview collect size
// – [320]: 300x266(1,2,5), 148x97(3,4)
// – [650]: 600x400(1,2,5), 290x194(3,4)
// – [768]: 650x433(1,2,5), 315x210(3,4)
// – [1024]: 570x380(1), 275x183(2-5)
// - [1920]: 790x526(1), 428x285(2), 250x166(3-5)

export const preview_1 = {
    XS: 300,
    S: 600,
    M: 650,
    L: 570,
    XL: 790
};
export const preview_2 = {
    XS: 300,
    S: 600,
    M: 650,
    L: 275,
    XL: 428
};
export const preview_3 = {
    XS: 148,
    S: 290,
    M: 315,
    L: 275,
    XL: 250
};
export const preview_4 = {
    XS: 148,
    S: 290,
    M: 315,
    L: 275,
    XL: 250
};
export const preview_5 = {
    XS: 300,
    S: 600,
    M: 650,
    L: 275,
    XL: 250
};


export const readAlso = {
    XS: 300,
    S: 285,
    M: 310,
    L: 286,
    XL: 360
};

export const readMore = {
    XS: 130,
    S: 241,
    M: 241,
    L: 214,
    XL: 241
};

export const userComment = {
    XS: 40,
    S: 50,
    M: 50,
    L: 50,
    XL: 50
};
export const author = {
    XS: 60,
    S: 70,
    M: 70,
    L: 70,
    XL: 70
};
export const magazineFooter = {
    XS: 145,
    S: 173,
    M: 173,
    L: 173,
    XL: 179
};
export const magazineSideBar = {
    XS: 124,
    S: 124,
    M: 132,
    L: 132,
    XL: 132
};

export const placeholderWidget = {
    XS: 300,
    S: 511,
    M: 650,
    L: 540,
    XL: 600
};

export const searchArticle = {
    XS: 130,
    S: 130,
    M: 220,
    L: 220,
    XL: 230
}
export const product = {
    XS: 300,
    S: 600,
    M: 650,
    L: 510,
    XL: 666
};
export const story = {
    XS: 320,
    S: 320,
    M: 320,
    L: 320,
    XL: 320
};

export const authorArticle = {
    XS: 50,
    S: 50,
    M: 50,
    L: 50,
    XL: 50
};
export const featureMain = {
    XS: 320,
    S: 650,
    M: 768,
    L: 1024,
    XL: 1920
};
export const separator = {
    XS: 130,
    S: 210,
    M: 255,
    L: 210,
    XL: 265
};
export const separatorAuthors = {
    XS: 120,
    S: 160,
    M: 160,
    L: 160,
    XL: 160
};

export const authorPage = {
    XS: 120,
    S: 120,
    M: 180,
    L: 197,
    XL: 200
};

export const issuesPage = {
    XS: 179,
    S: 145,
    M: 145,
    L: 124,
    XL: 124
};
