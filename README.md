## Proyecto e-Comerce
![Alt Text](./src/assets/ecomerce.gif)
## Acerca
* En el proyecto se trabaja con componentes presentacionales que reciben props y componentes funcionales que manejan el estado,
haran llamadas asincronas, etc.
por ejemplo: ItemDetailContainer.js maneja el estado y lo entrega al componente que recibe props ItemDetail.js
* el manejo de las rutas estan hechas con la dependencia react-router-dom

## Dependencias adicionales 
* styled-components CSS in JS  (https://www.npmjs.com/package/styled-components) 
** "CSS-in-JS es un enfoque de estilo que abstrae el modelo CSS al nivel del componente, en lugar del nivel del documento. Esta es la idea de que CSS puede tener un  alcance solo para un componente específico y en contraposición al nivel del documento. Los beneficios de usar CSS-in-JS incluyen:

Reducir la cantidad de solicitudes HTTP: CSS-in-JS significaría que no tenemos que realizar solicitudes HTTP para cargar activos y recursos.
Fragmentación de estilo: el uso de CSS-in-JS significa que puede escribir estilos libremente sin preocuparse por problemas de compatibilidad."

## Estructura de Archivos
### src

* [assets/](./src/assets)
  * [images/](./src/assets/images)
* [components/](./src/components)
  * [Icons/](./src/components/Icons)
    * [Heart.js](./src/components/Icons/Heart.js)
    * [Icon.js](./src/components/Icons/Icon.js)
    * [LeftArrow.js](./src/components/Icons/LeftArrow.js)
    * [PinUser.js](./src/components/Icons/PinUser.js)
    * [Search.js](./src/components/Icons/Search.js)
    * [ShopingCart.js](./src/components/Icons/ShopingCart.js)
    * [index.js](./src/components/Icons/index.js)
  * [Item/](./src/components/Item)
    * [index.js](./src/components/Item/index.js)
    * [styles.js](./src/components/Item/styles.js)
  * [ItemCount/](./src/components/ItemCount)
    * [index.js](./src/components/ItemCount/index.js)
    * [styles.js](./src/components/ItemCount/styles.js)
  * [ItemCountContainer/](./src/components/ItemCountContainer)
    * [index.js](./src/components/ItemCountContainer/index.js)
  * [ItemDetail/](./src/components/ItemDetail)
    * [index.js](./src/components/ItemDetail/index.js)
    * [styles.js](./src/components/ItemDetail/styles.js)
  * [ItemDetailContainer/](./src/components/ItemDetailContainer)
    * [index.js](./src/components/ItemDetailContainer/index.js)
  * [ItemList/](./src/components/ItemList)
    * [index.js](./src/components/ItemList/index.js)
    * [styles.js](./src/components/ItemList/styles.js)
  * [ItemListContainer/](./src/components/ItemListContainer)
    * [index.js](./src/components/ItemListContainer/index.js)
    * [styles.js](./src/components/ItemListContainer/styles.js)
  * [Loader/](./src/components/Loader)
    * [index.js](./src/components/Loader/index.js)
    * [styles.css](./src/components/Loader/styles.css)
  * [Navbar/](./src/components/Navbar)
    * [index.js](./src/components/Navbar/index.js)
    * [styles.js](./src/components/Navbar/styles.js)
* [constants/](./src/constants)
  * [items.js](./src/constants/items.js)
* [theme/](./src/theme)
  * [globalStyle.js](./src/theme/globalStyle.js)
* [App.js](./src/App.js)
* [index.js](./src/index.js)
