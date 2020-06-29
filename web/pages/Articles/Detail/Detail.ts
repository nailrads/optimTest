import {Component, Vue} from 'nuxt-property-decorator';
import IContext from '~/interfaces/IContext';

const ArticleDetail = () => import('~/components/Articles/ArticleDetail/ArticleDetail');

@Component({
    layout: 'cosmo',
    components: {
        ArticleDetail
    }
})
export default class Detail extends Vue {
    private async asyncData({req, store, params}: IContext): Promise<{ article: {}, robot:boolean }> {
        const {category, subcategory, date, code} = params;

        const {article} = await store.dispatch('fetchPost', {id: `${category}/${subcategory}/${date}/${code}`});
        // @ts-ignore
        const robot = req.headers['user-agent'].indexOf('hth') !== -1;
        return {
            ...{article},
            robot
        }
    }
}
