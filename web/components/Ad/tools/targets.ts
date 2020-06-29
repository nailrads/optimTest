import {getDomain, getQuery, getRef} from '~/helpers/locationTool';
import {getCookie} from '~/helpers/Cookiez';
import ITag from '~/interfaces/ITag';

const getFlagForWindow = () => {
    const width = window.innerWidth;

    if (width > 1920) {
        return '1080p_and_more'
    } else if (1920 > width && width > 1680) {
        return '1050p'
    } else {
        return 'less_than_1050p'
    }
};

const getUtmValue = (utmName: string) => !!getQuery(utmName) ? getQuery(utmName) : 0;


const cosmoTargets = (articleId: number, page: number, articleTags: string | never[]) => [
    {
        property: 'CosmoArticleID',
        value: articleId
    },
    {
        property: 'cosmoArticleTag',
        value: articleTags
    },
    {
        property: 'pageCosmo',
        value: page.toString()
    },


    {
        property: 'tarCosmo',
        value: [location.pathname.substring(0, 40)]
    },
    {
        property: 'audience_target',
        value: 'false'
    },
    {
        property: 'ad_window_width',
        value: getFlagForWindow()
    },
    {
        property: 'Referrer',
        value: getRef()
    },
    {
        property: 'HoroscopeAudience',
        value: 0
    },
    {
        property: 'exclusive',
        //@ts-ignore
        value: !!top.google_ads_exclusive ? top.google_ads_exclusive : false
    },
    {
        property: 'variant',
        value: getCookie('variant')
    },


    {
        property: 'arbitrageSource',
        value: getCookie('arbitrage_source')
    },
    {
        property: 'dfptest',
        value: getUtmValue('dfptest')
    },
    {
        property: 'utm_campaign',
        value: getUtmValue('utm_campaign')
    },
    {
        property: 'utm_medium',
        value: getUtmValue('utm_medium')
    },
    {
        property: 'utm_source',
        value: getUtmValue('utm_source')
    }
];

export const getCollectTargets = (articleId: number, page: number, articleTags: ITag[]) => {
    const platform = getDomain(document.location.host);
    const tags = articleTags.length > 0 ? articleTags.map(tag => tag.code).join(',') : [];

    if (platform) {
        return cosmoTargets(articleId, page, tags);
    }
};
