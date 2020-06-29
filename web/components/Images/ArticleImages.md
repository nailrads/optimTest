## Widget image/images 

## Ссылки

- 📘 Документация: [wiki/photos-in-a-row](https://git.fppressa.ru/cosmo/cosmo2020-docs/wikis/photos-in-a-row) 
 
## Параметры(Поля)

```$xslt
article.detail_text: {
     "tag": "p",
     "id": "",
     "text": "",
     "widget": {
           "name": "images",
           "params": {
             "images": IPicture[]
           }
     }
}
```
> Данная структура включена в компонент Images для отрисовки виджета в детальной статье

## Шаблон обработки

```vue
<div class="images" v-if="images">

    <template v-if="singleImage">

        <div class="image-single">

            <template v-if="isProduct">
                <ArticleProduct :product="getProduct(picture)"/>
            </template>

            <template v-else>

                <Picture
                    class="images__item"
                    :image="picture"
                    :title="picture.caption"
                    :alt="picture.alt"
                />

                <ImagesSources :sources="sources"/>
            </template>
        </div>

    </template>

    <template v-else>

        <div class="images__list" :data-count-image="picture.length">
            <template v-for="(image, index) in picture">
                <Picture
                    class="images__item"
                    :image="image"
                    :title="image.caption"
                    :alt="image.alt"
                    :key="`${image.alt}${index}`"
                />
            </template>
        </div>

        <ImagesSources :sources="sourcesList"/>

    </template>
</div>
```
> Если поле buy_link не пустое, то это товарная подборка


### Размеры картинок
```$xslt
XS: source,
S: source,
M: source,
L: source,
XL: source
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

