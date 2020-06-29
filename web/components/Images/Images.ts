import {Component, Prop, Vue} from 'nuxt-property-decorator';
import IArticleImg from '~/interfaces/IArticleImg';

import ImagesSources from '~/components/Images/ImagesSources/ImagesSources';
import ArticleProduct from '~/components/ArticleProduct/ArticleProduct';
import Picture from '~/components/Picture/Picture';

@Component({
    components: {
        Picture,
        ArticleProduct,
        ImagesSources
    }
})
export default class Images extends Vue {
    @Prop(Array) private images!: IArticleImg[];

    private get sourcesList(): string[] {
        return this.images.map((image: IArticleImg) => image.source || '').filter((source: string) => source.length > 0);
    }

    private get singleImage() {
        return this.images.length === 1
    }

    private get picture(): IArticleImg | IArticleImg[] {
        return this.singleImage ? this.images[0] : this.images;
    }

    private get isProduct() {
        return !!(this.picture as any).buy_link;
    }

    private get sources() {
        
        const sources: string[] = [];
        
        if (!Array.isArray(this.picture)) {
            const caption = this.picture.caption;
            const source = this.picture.source;

            if (caption) {
                sources.push(caption);
            }

            if (source) {
                sources.push(source);
            }
        }
        
        return sources;
    }

    private getProduct(image:IArticleImg) {
        //@ts-ignore
        const product = {...image, ...image.url}; // ToDo fixed it after API fix interface for all images!!!!
        delete product.url;
        return product;
    }

}
