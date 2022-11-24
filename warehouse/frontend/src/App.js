import React from 'react';
import './App.css';
import ProductList from './components/Product.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'menuItems': [
                {'nameItem': 'Главная', 'href': '#'},
                {'nameItem': 'Товары', 'href': '#'},
                {'nameItem': 'Контрагенты', 'href': '#'}
            ],
            'products' : []
        }
    }

    componentDidMount() {
        const products = [
            {
                'product_name': 'Монитор Sumsung',
                'description': 'Диагональ 27 дюймов'
            },
            {
                'product_name': 'Принтер Epson',
                'description': 'цветной'
            }
        ]

        this.setState(
            {
                'products': products
            }
        )
    }

    render() {
        return (
            <div>
                <ProductList products={this.state.products} />
            </div>

        )

    }
}

export default App;
