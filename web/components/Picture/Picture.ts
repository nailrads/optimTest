import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IPicture from "~/interfaces/IPicture";
import isRetina from "~/helpers/isRetina";

import {
    story,
    getWidthDeviceForImage,
    internalMainImage,
    newsStarsSide,
    popBlock,
    product,
    separator,
    separatorAuthors,
    preview_1,
    preview_2,
    preview_3,
    preview_4,
    preview_5,
    searchArticle,
    readAlso,
    readMore,
    userComment,
    author,
    magazineFooter,
    magazineSideBar,
    placeholderWidget,
    authorArticle,
    authorPage,
    issuesPage
} from './imagesSize';


@Component
export default class Picture extends Vue {
    @Prop(Object) private image!: IPicture | any; //ToDo fixed any
    @Prop(String) private block!: string;
    @Prop(String) private alt!: string;

    private size: string = '';

    private get isRetina() {
        return !isRetina;
    }

    private get pictureType() {
        return (!this.isRetina && this.image) ? this.image.retina : this.image.default;
    }

    private get picture() {
        return this.pictureType[this.size] ? this.pictureType[this.size] : this.pictureType['source'];
    }

    private get sizes(): {width: number, height: number} {
        let width;
        let height;

        try {
            [width, height] = this.picture.init.split('_cropped_').reverse()[0].split('x');
            width = parseFloat(width) || 0;
            height = parseFloat(height) || 0;
        } catch {
            width = 0;
            height = 0;
        }

        return {width, height};
    }

    private get ratio(): number {
        const {width, height} = this.sizes;

        if (width > 0 && height > 0) {
            return parseFloat((width / height).toFixed(5));
        }

        return 0;
    }

    private collectSizes() {
        switch (this.block) {
            case 'story':
                return story;
            case 'detailMain':
                return internalMainImage;
            case 'product':
                return product;
            case 'newsStarsSide':
                return newsStarsSide;
            case 'preview_1':
                return preview_1;
            case 'preview_2':
                return preview_2;
            case 'preview_3':
                return preview_3;
            case 'preview_4':
                return preview_4;
            case 'preview_5':
                return preview_5;
            case 'popBlock':
                return popBlock;
            case 'readAlso':
                return readAlso;
            case 'readMore':
                return readMore;
            case 'userComment':
                return userComment;
            case 'author':
                return author;
            case 'magazineFooter':
                return magazineFooter;
            case 'magazineSideBar':
                return magazineSideBar;
            case 'placeholderWidget':
                return placeholderWidget;
            case `searchArticle`:
                return searchArticle;
            case 'authorArticle':
                return authorArticle;
            case 'separator':
                return separator;
            case 'separatorAuthors':
                return separatorAuthors;
            case 'authorPage':
                return authorPage;
            case 'issuesPage':
                return issuesPage;
            default:
                return null;
        }
    }

    private pictureSize() {
        const widthScreen = !process.server ? window.innerWidth : 768;
        const sizePicture = getWidthDeviceForImage(widthScreen);
        this.size = this.collectSizes() ? (this.collectSizes() as any)[sizePicture].toString() : 'source';
    }

    private mounted() {
        const layer = this.$refs.layer as HTMLDivElement;

        this.pictureSize();
        if (this.ratio > 0 && layer) {
            layer.style.paddingTop = `${100 / this.ratio}%`
        }
    }
}
