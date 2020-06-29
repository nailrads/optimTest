import {Component, Vue, Prop} from 'nuxt-property-decorator';

const Picture = () => import('~/components/Picture/Picture');
const Tag = () => import('~/components/Tag/Tag');
const Ad = () => import(/* webpackChunkName: "Ad" */ '~/components/Ad/Ad');

@Component({
    components: {
        Picture,
        Tag,
        Ad
    }
})
export default class ArticleDetail extends Vue {
    @Prop(Object) private article!: any;
    @Prop(Boolean) private robot!: boolean;

    private get collectsCnt() {
        const bbPositions = this.article.detail_text.map((item: { tag: string }, index: number) => item.tag.includes('billboard') ? index : null).filter((item: { tag: string }) => item);

        const cnt = [...this.article.detail_text];

        let collects: any[] = [];

        bbPositions.reduce((acc: any, item: any, index: number, arr: any) => {
            collects.push(cnt.slice(acc, item));
            acc = item;
            return acc
        }, 0);

        collects.push(cnt.slice(bbPositions[bbPositions.length - 1]));

        return this.robot ? [collects[0]] : collects
    }
}
