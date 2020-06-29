import {Configuration} from '@nuxt/types'

const defaultTemplateFolder = 'pages';

const List = `${defaultTemplateFolder}/Articles/ArticlesList/ArticlesList.vue`;
const Detail = `${defaultTemplateFolder}/Articles/Detail/Detail.vue`;
const Privacy = `${defaultTemplateFolder}/InfoPages/Privacy/Privacy.vue`;
const Terms = `${defaultTemplateFolder}/InfoPages/Terms/Terms.vue`;

const config: Configuration = {
    server: {
        port: process.env.APP_WEB_PORT,
        host: process.env.APP_WEB_HOST
    },
    telemetry: false,
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        // script: [
        //   { src: 'https://www.googletagservices.com/tag/js/gpt.js' }
        // ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: 'blue'},
    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/vue-lazyload',
        '@/plugins/filters'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxt/typescript-build'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/dotenv',
        '@nuxtjs/svg-sprite',
        '@nuxtjs/style-resources',
        '@independentmedia/dfp',
    ],
    gptAds: {
        networkCode: '59083624',
        componentName: 'DFP',
        collapseEmptyDivs: true,
        singleRequest: true,
        individualRefresh: true,
        ghostMode: false
    },
    styleResources: {
        scss: [
            'assets/scss/main.scss'
        ]
    },

    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: process.env.APP_WEB_API_HOST,
        credentials: false
    },
    /*
    ** Build configuration
    */
    router: {
        extendRoutes(routes: any, resolve: (...pathSegments: string[]) => string): void {
            routes.push(
                {
                    name: 'terms',
                    path: '/terms',
                    component: resolve(__dirname, Terms)
                },
                {
                    name: 'privacy',
                    path: '/privacy',
                    component: resolve(__dirname, Privacy)
                },
                {
                    name: 'article-detail',
                    path: '/:category/:subcategory/:date/:code',
                    component: resolve(__dirname, Detail),
                    props: true
                },
                {
                    name: 'home',
                    path: '/',
                    component: resolve(__dirname, List)
                }
            )
        }
    },
    build: {
        /*н
        ** You can extend webpack config here
        */
        babel: {
            plugins: [
                ["@babel/plugin-proposal-decorators", {legacy: true}],
                ["@babel/plugin-proposal-class-properties", {loose: true}]
            ]
        },

        extend(config: any, ctx: any) {
        }
    }

};

export default config;
