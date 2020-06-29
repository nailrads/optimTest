## Эксперт в статье
- Эксперт имеет старое понятие "Автор в статье"
- Включает в себя компонент [Picture](https://git.fppressa.ru/cosmo/cosmo2-front/tree/master/components/Picture) для отображения аватарки эксперта
 
## Ссылки

- 📘 Документация: [wiki/expert](https://git.fppressa.ru/cosmo/cosmo2020-docs/wikis/expert)
- 📘 Структура картинок [docs/IPicture](https://git.fppressa.ru/cosmo/cosmo2-front/tree/master/docs/IPicture.md)
- 🖼 Компонент для изображений [components/Picture](https://git.fppressa.ru/cosmo/cosmo2-front/tree/master/components/Picture)
- 📘 Получение размерности картинок [docs/ImageSize](https://git.fppressa.ru/cosmo/cosmo2-front/tree/master/docs/getSizeImage.md)


## Входные параметры(Поля)

```$xslt
expert: {
    id?: number;
    name: string;
    code: string;
    description: string;
    image?: IPicture, 
};
```
> Поля name & description могу являеться в виде html кода, тогда она будет работать как ссылка(например: name - ссылка на инстаграм эксперта, description - ссылка на его компанию).

## Размер изображения (Аватарка цитируемого)
```$xslt
XS: 60,
S: 70,
M: 70,
L: 70,
XL: 70
```

## Шаблон компонента


```vue
<div class="author-in-article">
    <div class="author-in-article__cnt">

        <Picture
            v-if="author.image"
            :image="author.image"
            :alt="author.name"
            :block="'author'"
            class="picture"
        />

        <div class="author-info">
            <span
                v-html="author.name"
                field="name"
            />

            <span
                v-html="author.description"
                field="description"
            />
        </div>

    </div>
</div>
```
