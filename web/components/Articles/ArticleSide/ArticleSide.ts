import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IPost from "~/interfaces/posts/IPost";

import ArticlesRecommends from '~/components/Articles/ArticlesRecommends/ArticlesRecommends';
import AuthorInArticle from '~/components/Author/AuthorInArticle/AuthorInArticle';
import ButtonDiscussion from '~/components/Buttons/ButtonDiscussion/ButtonDiscussion';
import ButtonLike from '~/components/Buttons/ButtonLike/ButtonLike';
import SocialNetworks from '~/components/SocialNetworks/SocialNetworks';

@Component({
  components: {
    ArticlesRecommends,
    AuthorInArticle,
    ButtonDiscussion,
    ButtonLike,
    SocialNetworks
  }
})
export default class ArticleSide extends Vue {
  @Prop(Object) private article!: IPost;

  private articleRecommend: any = [
    {
      id: 1,
      code: 'samye-modnye-rubashki-v-kletku-zimy-2020-kakie-vybrat-i-s-chem-sochetat',
      name: 'Самые модные рубашки в клетку зимы-2020: какие выбрать и с чем сочетать',
      image: 'https://images11.cosmopolitan.ru/upload/img_cache/9ce/9ce0ac78e74b27fcbf1c2fe769dcd722_ce_565x490x87x0_cropped_192x128.jpg'
    },
    {
      id: 2,
      code: 'samye-modnye-yubki-midi-na-zimu-2020-7-modeley-v-kotoryh-budet-uyutno-v-moroz',
      name: 'Самые модные юбки-миди на зиму-2020: 7 моделей, в которых будет уютно в мороз',
      image: 'https://images11.cosmopolitan.ru/upload/img_cache/e14/e149a12b9f7c0accf9163ffa3579c5f5_ce_565x490x87x0_cropped_192x128.jpg'
    }
  ]
}
