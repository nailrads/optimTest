import {Component, Getter, Mutation, Prop, Vue} from 'nuxt-property-decorator';

import * as DfpBanners from '~/Cosmo/project/ads/dfp';
import * as ArbitrageBanners from '~/Cosmo/project/ads/arbitrage';


import visibleElement, {isVisible} from "~/helpers/visibleElement";
import {ARBITRAGE_NAME, DFP_NAME} from "~/Cosmo/project/settings";
import IBannerTimer from "~/interfaces/Banner/IBannerTimer";
import IBanner from "~/interfaces/Banner/IBanner";
import ITag from "~/interfaces/ITag";
import {getCollectTargets} from "./tools/targets";

interface IAdsPlace {
    readonly gpt: string;
    readonly id: string;
    readonly sizes: Array<number[]> | number[];
}

interface IAdsPlatform {
    [key: string]: any;
}

@Component
export default class Ad extends Vue {
    @Prop(String) private border?: string;
    @Prop(String) private bannerName!: string;

    @Prop(Number) private page?: number;
    @Prop({type: Number, default: 0}) private articleId!: number;
    @Prop(Array) private articleTags?: ITag[];

    @Prop(Object) private tars!: any;

    @Getter private getAdsList!: string[];
    @Mutation private setAd!: (adBanner: string) => void;
    @Mutation private removeAd!: (adBanner: string) => void;

    @Getter private getArbitrageSource!: string;

    private visible: boolean = false;
    private hash: string = '';
    private bannerHash: string = `${this.bannerName}_${+new Date}`;
    private device: string = '';

    private get withBorder(): boolean {
        return Boolean(this.border);
    }

    private get isDetailTop() {
        return (this.$route.name === 'detail' || this.$route.name === 'detail--news') && this.bannerName === 'billboard_topline'
    }

    private sizes(initSizes: Array<[number]>) {
        const widthScreen = window.innerWidth;
        const conditions = [
            'content_billboard',
            'after_text'
        ];

        if (conditions.includes(this.bannerName) && widthScreen < 1150) {
            return initSizes.slice(0, 4);
        } else if (conditions.includes(this.bannerName) && widthScreen >= 1150) {
            return initSizes[initSizes.length - 1];
        } else {
            return initSizes;
        }
    }

    private get userAgent() {
        return (this as any).$ua.deviceType();
    }

    private get detectInterval() {
        if (!!this.$route.query.interval) { // If testing is being conducted
            return Number(this.$route.query.interval) * 1000
        } else {
            return this.timer ? Number(this.timer.refresh) * 1000 : 0
        }
    }

    private hide = false;

    private get isShow() {
        return (this.disabled || this.visible) || (this.bannerName === 'sticky' && this.visible);
    }

    private disabled = false;

    private interval: any = '';

    private get bannerDetect() {
        return this.getAdsList.includes(this.bannerHash);
    }

    private refreshAd() {
        if (!this.bannerDetect) { // Если баннер уже имеется в массиве, значит для него не запускаем отсчет интервала
            this.setAd(this.bannerHash);

            this.interval = setInterval(() => {
                this.hash = `${this.bannerName}_${+new Date()}`;
                this.$forceUpdate();
            }, this.detectInterval);
        }
    }

    private refreshBanner(visible: boolean) {
        // Если баннера был виден пользователю, но сейчас стал не видим. То мы его отключаем, но не скрываем
        const stageFirst = this.visible && !visible;

        // Если баннер был скрыт, а теперь стал виден пользователю То мы вешаем счетчик
        const stageSecond = this.visible && visible;

        // Если баннер был отключен, но теперь снова в поле видимости
        const stageThird = !this.disabled && visible;

        // Если баннер был скрыт, а теперь стал виден пользователю
        if (!this.visible) {
            this.visible = visible;
        }

        if (!!this.timer && !!this.timer.refresh) { // Если есть таймер и в нем рефреш, значит баннер должен рефрешеться

            if (stageFirst && !stageSecond) {
                this.disabled = this.visible && !visible;
                this.removeAd(this.bannerHash);
                clearInterval(this.interval);
            }

            if (stageSecond) {
                this.refreshAd()
            }

            if (stageThird) {
                this.disabled = false;
                this.refreshAd()
            }
        }
    }


    private get targetings() {
        return getCollectTargets(this.getCosmoArticleId, !!this.page ? this.page : 0, !!this.articleTags ? this.articleTags : [])
    }

    private get getCosmoArticleId() {
        if (this.tars) {
            switch (this.$route.name) {
                case 'home':
                    return 0;
                case 'section':
                case 'subsection':
                case 'section--news':
                    return this.tars.section_id ? this.tars.section_id : 2222;
                case 'detail':
                case 'detail--news':
                    return this.tars.is_old_article ? 1111 : this.tars.article_id;
                default:
                    return 2222;
            }
        } else {
            return 2222
        }
    }

    private timer: IBannerTimer | null = null;

    private get banner() {
        const device = this.bannerName !== 'native_text' && this.bannerName !== 'menu_button' && !this.getArbitrageSource ? `/${this.device}` : '';
        const prefix = `${!!this.getArbitrageSource ? `${DFP_NAME}/${ARBITRAGE_NAME}` : DFP_NAME}${device}`;

        const adSource = !!this.getArbitrageSource ? (ArbitrageBanners as Record<string, IBanner>) : (DfpBanners as Record<string, IBanner>);
        const adBanner = adSource[this.bannerName];

        if (!!adBanner) {

            // Fetch banner for platform
            const bannerParams = adBanner[this.device];

            // If banner available for platform
            if (bannerParams) {
                const {id, timer, sizes} = bannerParams;

                // if the banner should be updated
                this.timer = timer;

                return {
                    id: `${prefix}/${id}`,
                    sizes
                }
            }
        }
    }

    private hideSticky() {
        this.visible = false
        setTimeout(() => this.visible = true, this.detectInterval);
    }

    private mounted() {
        // if (this.bannerName === 'background') {
        //     const bgDetect = setInterval(() => {
        //         const place = document.getElementById('AdUnitBgPlace');
        //         const bg = document.getElementById('AdUnitBg');
        //         const sectionBanner = document.getElementById('sectionBanner');
        //
        //         if (place && bg) {
        //             place.insertBefore(bg, place.firstChild)
        //
        //             if (sectionBanner) {
        //                 sectionBanner.classList.add('ad-wrap')
        //             }
        //         }
        //     }, 1000);
        //     setTimeout(() => clearInterval(bgDetect), 7000);
        // }
        const banner = (this.$refs[`adBanner_${this.bannerName}`] as HTMLDivElement);
        //
        new visibleElement(banner, this.refreshBanner);

        this.visible = isVisible(banner);
        //
        // if (this.bannerName === 'sticky') {
        //     setTimeout(() => this.visible = true, 5000);
        // }

        this.device = this.userAgent !== 'pc' ? 'mobile' : 'desktop';

        // if (this.bannerName === 'menu_button' && window.innerWidth >= 768) {
        //     this.visible = true
        // }
    }
}
