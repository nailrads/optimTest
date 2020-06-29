## Цитата в статье
- Цитата имеет старое понятие "Врезка" или "Факт"
- Кавычки включены в разметку шаблона(так как в макете указан определенный вид кавычек)
- Включает в себя компонент [Picture](https://git.fppressa.ru/cosmo/cosmo2-front/tree/master/components/Picture) для отображения аватарки цитируемого человека
 
## Ссылки

- 📘 Документация: [wiki/citation](https://git.fppressa.ru/cosmo/cosmo2020-docs/wikis/citation)
- 📘 Структура картинок [docs/IPicture](https://git.fppressa.ru/cosmo/cosmo2-front/tree/master/docs/IPicture.md)
- 🖼 Компонент для изображений [components/Picture](https://git.fppressa.ru/cosmo/cosmo2-front/tree/master/components/Picture)
- 📘 Получение размерности картинок [docs/ImageSize](https://git.fppressa.ru/cosmo/cosmo2-front/tree/master/docs/getSizeImage.md)


## Входные параметры(Поля)

```$xslt
quote: {
    name: string
    text: string 
    image?: IPicture
    description?: string
}
```
> Поля text и name являются обязательными, остальные опциональные. При их отсутствии скрываются соответствующие блоки

## Размер изображения (Аватарка цитируемого)
```$xslt
XS: 50,
S: 50,
M: 50,
L: 50,
XL: 50
```

## Шаблон компонента


```vue
<div class="author-quote">
    <p v-html="`«${quote.text}»`"/>

    <div class="expert">
        <Picture
            v-if="quote.image"
            :image="quote.image"
            :alt="quote.name"
            :block="'author'"
            class="picture"
        />
        <span
            v-text="quote.name"
        />
        <span
            v-if="quote.description"
            v-html="quote.description"
        />
    </div>
</div>
```
