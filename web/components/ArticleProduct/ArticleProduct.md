## Товарная подборка в статье (Товар) 

## Ссылки

- 📘 Документация: [wiki/goods-image](https://git.fppressa.ru/cosmo/cosmo2020-docs/wikis/goods-image) 
 
## Параметры(Поля)

```$xslt
article: {
    widget: {
        name: 'images'
        params: [
            {
                name: string;
                url: string;
                source?: string;
                buy_link?: string;
                caption?: string;
            }
        ]
    }
}
```
> Данная структура включена в компонент Images для отрисовки картинок в детальной статье

## Данные и рендер
- Проверка Товарной подборки происходит по параметру `buy_link`, если он не пустой, значит это товарная подборка

- Имя товара берется из поля `caption`, но если оно пустое, то берется поле `alt`

## Шаблон обработки

```vue
<div class="article-product" v-if="product">

    <Picture
        class="images__item"
        :image="product"
        :alt="product.alt || product.source"
        :block="'product'"
    />

    <div class="article-product__footer">
        <span v-html="product.alt || product.caption"/>

        <a :href="product.buy_link" @click="gaSend" target="_blank">
            в магазин
        </a>
    </div>

</div>
```
> При клике на кнопку происходит открытие новой вкладки с адресом указанным в поле `buy_link`
