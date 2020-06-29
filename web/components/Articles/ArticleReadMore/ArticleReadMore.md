## Статья внутри стати (ReadMore or Relevant article)

## Ссылки

- 📘 Документация: [wiki/read-more](https://git.fppressa.ru/cosmo/cosmo2020-docs/wikis/read-more) 
 
## Параметры(Поля)

```$xslt
"widget": {
  "name": "relevant_article",
  "params": {
    "id": number,
    "image": IPicture,
    "name": string,
    "code": string,
    "active_from": string (ex.: "20.07.2019, 16:00"),
    "section": {
      "id": number,
      "name": string,
      "code": string,
      "subsection": {
        "id": number,
        "name": string,
        "code": string
      }
    }
  }
}
```
> Данная структура включена в компонент ArticleDetail для отрисовки детальной статьи

## Шаблон обработки

```vue
<div :ref="`widget_${widgetName}`">

    <template v-if="widgetShow">
        <nuxt-link
            class="read-more"
            :prefetch="false"
            :to="{
                name: 'detail',
                params:{
                  section: article.section.code,
                  subsection: article.section.subsection.code,
                  code: article.code
                },
                query: {
                    from: 'article_cosmo_recommend'
                }
            }"
        >

            <Picture :image="article.image" :alt="article.name" :title="article.name" :block="'readMore'" class="picture"/>

            <div class="read-more__text">
                <h3 :text-content.prop="article.name"/>
                <span>Читать всю статью</span>
            </div>

        </nuxt-link>
    </template>

    <template v-else>
        <div class="read-more" style="padding-bottom: 0;">
            <div class="picture post-skeleton__thumbnail"></div>
            <div class="read-more__text">
                <div class="post-skeleton__text-shell">
                    <div class="post-skeleton__title"></div>
                    <div class="post-skeleton__desc"></div>
                </div>
            </div>
        </div>
    </template>
</div>
```
> Содержит скелет для загрузки и utm параметр article_cosmo_recommend


### Размеры картинок
```$xslt
XS: 130,
S: 241,
M: 241,
L: 214,
XL: 241
```
> Получение размерности
```$xslt
XS = [320]
S = [650]
M = [768]
L = [1024]
XL = [1920]

if (width >= 320 && 650 > width) {           // Если ширина экрана больше или равно 320px, а также меньше 650px
    return 'XS';
} else if (width >= 650 && 768 > width) {    // Если ширина экрана больше или равно 650px, а также меньше 768px
    return 'S';
} else if (width >= 768 && 1024 > width) {   // Если ширина экрана больше или равно 768px, а также меньше 1024px
    return 'M';
} else if (width >= 1024 && 1920 > width) {  // Если ширина экрана больше или равно 1024px, а также меньше 1920px
    return 'L';
} else if (width >= 1920) {                  // Если ширина экрана больше или равно 1920px
    return 'XL';
} else {                                     // Если не отработало какой-либо условие, то возвращаем средний рамзер по-умолчанию
    return 'M';
}
```

### Полезные ссылки(пока внутри доки, далее переместим в отдельные файлы в ходе написания документации)

### IPicture
``` JSON
interface IPicture = { 
    default: { 
        [key:string]: {
            init: string(.png,.gif,.jpg, etc...),
            webp: string(.webp)
        } 
    },
    retina: { 
        [key:string]: {
            init: string(.png,.gif,.jpg, etc...),
            webp: string(.webp)
        } 
    }, 
};
```

