import React from 'react'


const ProductItem = ({product}) => {
    return(
        <tr>
            <td>{product.product_name}</td>
            <td>{product.description}</td>
        </tr>
    )
}

const ProductList = ({products}) => {
    return(
        <div>
            <table className='productsTable'>
                <th>Название товара</th>
                <th>Описание товара</th>
                {products.map((product_) => <ProductItem product = {product_} />)}
            </table>
        </div>
    )
}


export default ProductList