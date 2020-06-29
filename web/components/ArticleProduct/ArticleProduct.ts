import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IArticle from "~/interfaces/IArticle";

import Picture from '~/components/Picture/Picture';

@Component({
    components: {
        Picture
    }
})
export default class ArticleProduct extends Vue {
    @Prop(Object) private product!: IArticle;

    private gaSend(){
        if (process.env.NODE_ENV === 'dev') {
        //@ts-ignore
            console.log(`Buy__MoneyLink__(${this.product.alt || this.product.caption})`);
        }
        //@ts-ignore
        ga('send','event','button','click', `Buy__MoneyLink__(${this.product.alt || this.product.caption})`)
    }
}
