## Ad (DFP)

#### Targets Cosmo (`symbol [!] equals required, symbol [?] equals optional`)

- `[!]` `CosmoArticleID: [id])` – `id` статьи в которой загрузился рекламный блок, если блок загрузился на любой другой странице, то отправляется значение по-умолчанию(`default: 0`)
- `[!]` `cosmoArticleTag: ['tag','tag'...])` – `теги/tags` статьи на которой загружается блок
- `[!]` `pageCosmo: [depth])` – глубина бесконечного скролла(`depth`) на котором загрузился блок (`default: 0`)

- `[!]` `tarCosmo: ['pathname'])` – pathname это полный путь страницы(без хоста) на которой загрузился блок
- `[?]` `dfptest: [queryValue])` – это `query` параметр для тестовых страниц `dfptest=queryValue`, где `queryValue` число (`default: 0`)
- `[!]` `audience_target: [flag])` – если пользователь зарегистрирован, то `flag` ставим `true`, иначе `false` (`default: false`)
- `[!]` `ad_window_width: [flag])` – если `width`(ширина окна браузера) `width >= 1920`, то `flag` ставим `1080p_and_more`, если ширина `1920 > width > 1680`, то `1050p`, если меньше `less_than_1050p`
- `[!]` `Referrer: [ref])` – `ref` источник из которого пришел пользователь(например 'google'), если переход по прямой ссылке `ref` ставим `direct`, если со страницы платформы `ref` ставим `cosmo`
- `[!]` `HoroscopeAudience: [flag])` – Если имеется подписка на гороскоп `flag` ставим `1`, иначе значение по-умолчанию (`default: 0`)
- `[!]` `exclusive: [flag])` – Если имеется значение в переменной(приходит и устанавливается через AdManager) `top.google_ads_exclusive` ставим значение, иначе значение по-умолчанию (`default: false`)
- `[!]` `utm_campaign: [queryValue])` – это `query` параметр для арбитражного трафика `utm_campaign=queryValue`, где `queryValue` строка, иначе значение по-умолчанию (`default: ''`)
- `[!]` `arbitrageSource: [queryValue])` – это `query` параметр где значение это название партнера для арбитражного трафика `arbitrageSource=queryValue`, где `queryValue` строка, иначе значение по-умолчанию (`default: ''`)
- `[!]` `utm_medium: [queryValue])` – это `query` параметр для источника канала `utm_medium=queryValue`, где `queryValue` строка, иначе значение по-умолчанию (`default: ''`)
- `[!]` `utm_source: [queryValue])` – это `query` параметр для имени источника арбитражного трафика `utm_source=queryValue`, где `queryValue` строка, иначе значение по-умолчанию (`default: ''`)


> По поводу `CosmoArticleID` есть некоторые пояснения.
```$xslt
CosmoArticleID = 0 - для главной страницы
CosmoArticleID = (id категории/подкатегории) - для страниц категорий (например, для cosmo.ru/fashion/trends/ => CosmoArticleID=14)
CosmoArticleID = 1111 - для статей, дата публикации которых > 90 дней от текущей даты
CosmoArticleID = (id материала) - дата статей, дата публикации которых =< 90 дней от текущей даты
CosmoArticleID = 2222 - для всех остальных страниц
```
