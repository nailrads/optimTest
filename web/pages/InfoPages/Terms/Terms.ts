import {Component, Vue} from 'nuxt-property-decorator';

@Component({
    layout: 'cosmo'
})
export default class Terms extends Vue {
    private socialNetworks:any = [
        {
            name: 'facebook',
            path: 'https://facebook.com/CosmopolitanRussia/'
        },
        {
            name: 'vk',
            path: 'https://vk.com/Cosmopolitan'
        },
        {
            name: 'twitter',
            path: 'https://twitter.com/Cosmopolitanrus/'
        },
        {
            name: 'instagram',
            path: 'https://instagram.com/Cosmopolitan_russia/'
        },
        {
            name: 'ok',
            path: 'https://ok.ru/Cosmo/'
        }
    ]
}
