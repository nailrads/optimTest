import IMenuLink from "~/interfaces/IMenuLink";

const menuLinks: IMenuLink[] = [
  {slug: 'news', name: 'Новости', path: 'news'},
  {slug: 'contests', name: 'Конкурсы', path: 'contests'},
  {slug: 'video', name: 'Видео', path: 'video'},
  {slug: 'cosmoshop', name: 'Cosmoshop', path: 'cosmoshop'},
  {slug: 'fashion', name: 'Мода', path: 'fashion'},
  {slug: 'beauty', name: 'Красота', path: 'beauty'},
  {slug: 'starts', name: 'Звезды', path: 'starts'},
  {slug: 'sex', name: 'Секс', path: 'sex'},
  {slug: 'forum', name: 'Форум', path: 'forum'},
  {slug: 'relations', name: 'Отношения', path: 'relations'},
  {slug: 'horoscope', name: 'Гороскоп', path: 'horoscope'},
  {slug: 'health', name: 'Здоровье', path: 'health'},
  {slug: 'lifestyle', name: 'Стиль жизни', path: 'lifestyle'},
  {slug: 'psychology', name: 'Психология', path: 'psychology'},
  {slug: 'cosmoTravel', name: 'Cosmo-Путешествие', path: 'cosmo-travel'},
  {slug: 'blog', name: 'Блог Редакции', path: 'blog'},
  {slug: 'specialProjects', name: 'Спецпроекты', path: 'special-projects'},
  {slug: 'contacts', name: 'Контакты', path: 'contacts'},


  {slug: 'compatibilityHoroscope', name: 'Гороскоп совместимости', path: 'compatibility-horoscope'},
  {slug: 'kamasutra', name: 'Камасутра', path: 'kamasutra'},
  {slug: 'calorieCounter', name: 'Счетчик калорий', path: 'calorie-counter'},
  {slug: 'weightCalculator', name: 'Калькулятор веса', path: 'weight-calculator'},
  {slug: 'fullCloset', name: 'Полный шкаф', path: 'full-closet'},


  // Subscribe to magazines
  {slug: 'cosmopolitanShopping', name: 'Cosmopolitan Shopping', path: 'cosmopolitan-shopping'},
  {slug: 'cosmopolitanBeauty', name: 'Cosmopolitan Beauty', path: 'cosmopolitan-beauty'},

  // Social Networks
  {slug: 'fb', name: 'FB', path: 'https://www.facebook.com/CosmopolitanRussia'},
  {slug: 'twitter', name: 'Twitter', path: 'https://twitter.com/cosmopolitanrus'},
  {slug: 'instagram', name: 'INST', path: 'https://www.instagram.com/cosmopolitan_russia'},
  {slug: 'ok', name: 'OK', path: 'https://ok.ru/cosmo'},
  {slug: 'vk', name: 'VK', path: 'https://vk.com/cosmopolitan'},
  {slug: 'link', name: 'Link', path: ''},
  {
    slug: 'feedly',
    name: 'Feedly',
    path: 'https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fwww.cosmo.ru%2Frss%2Futf8%2Frss_zen.xml'
  },

  // Terms & Privacy
  {slug: 'termsOfPostingMaterials', name: 'Условия размещения материалов', path: 'terms'},
  {slug: 'confidentialityPolicy', name: 'Политика конфиндециальности', path: 'privacy'},
];

export const linksNavbarMenu = [
  'news',
  'video',
  'cosmoshop',
  'fashion',
  'beauty',
  'starts',
  'sex',
  'forum'
];

export const linksSidebarMenuMain = [
  'news',
  'fashion',
  'contests',
  'horoscope',
  'beauty',
  'health',
  'starts',
  'lifestyle',
  'psychology',
  'relations',
  'cosmoTravel',
  'video',
  'blog',
  'specialProjects',
  'contacts'
];

export const linksAdditionalPages = [
  'compatibilityHoroscope',
  'kamasutra',
  'calorieCounter',
  'weightCalculator',
  'fullCloset'
];

export const linksMenuMagazine = [
  'cosmopolitanShopping',
  'cosmopolitanBeauty'
];

export const linksSocialNetworks = [
  'fb',
  'vk',
  'twitter',
  'instagram',
  'ok',
  'feedly'
];

export const linksArticleShare = [
  'fb',
  'vk',
  'ok',
  'link'
];

export const linksTermsAndPrivacy = [
  'termsOfPostingMaterials',
  'confidentialityPolicy'
];

export const getMenuLinks = (requestedLinks: string[]): IMenuLink[] => menuLinks.filter(menuLink => requestedLinks.includes(menuLink.slug));
