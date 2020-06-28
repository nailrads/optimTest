import {Component, Vue, Action} from 'nuxt-property-decorator';
import IPost from '~/interfaces/posts/IPost';
import IContext from '~/interfaces/IContext';

import AuthorArticle from '~/components/Author/AuthorArticle/AuthorArticle';
import AuthorInArticle from '~/components/Author/AuthorInArticle/AuthorInArticle';
import AuthorQuote from '~/components/Author/AuthorQuote/AuthorQuote';

import ArticleSide from '~/components/Articles/ArticleSide/ArticleSide';
import ArticleNote from '~/components/Articles/ArticleNote/ArticleNote';
import ArticleReadMore from '~/components/Articles/ArticleReadMore/ArticleReadMore';

import ArticlesPopular from "~/components/Articles/ArticlesPopular/ArticlesPopular";
import ArticlesRecommends from "~/components/Articles/ArticlesRecommends/ArticlesRecommends";
import ArticleShare from "~/components/Articles/ArticleShare/ArticleShare";

import BreadCrumbs from "~/components/BreadCrumbs/BreadCrumbs";
import Comments from '~/components/Comments/Comments';
import Subscription from '~/components/Subscription/Subscription';

@Component({
    layout: 'cosmo',
    components: {
        AuthorArticle,
        AuthorInArticle,
        AuthorQuote,
        ArticleSide,
        ArticleNote,
        ArticleReadMore,
        ArticlesPopular,
        ArticlesRecommends,
        BreadCrumbs,
        Comments,
        ArticleShare,
        Subscription
    }
})
export default class ArticleDetail extends Vue {
    private article: IPost | null = null;

    public async asyncData({req, store, params}: IContext): Promise<{ article: {}, robot:boolean }> {
        const {article} = await store.dispatch('fetchPost', {id: `${params.category}/${params.subcategory}/${params.date}/${params.code}`});
        // @ts-ignore
        const robot = req.headers['user-agent'].indexOf('hth') !== -1;
        return {
            ...{article},
            robot
        }
    }
}
