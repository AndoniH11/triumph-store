import React from 'react';
import { items, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {

    state = {
        bikes: [...items],
        sortedBikes: [],
        featuredProducts: [],
        detailProduct,
        slug: 'bobber',
        cart: [],
        cartTotal: [],
        type: 'Todas',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount() {
        this.setFeaturedProducts();
        this.setProducts();
        this.setSortedProducts();
        let bikesPrice = this.state.bikes.map(bike => bike.price)
        let maxPrice = Math.max(...bikesPrice)
        this.setState({
            price: maxPrice,
            maxPrice,
            // cart: [...items]
        })
    }

    clearCart = () => {
        let tempCart = []
        this.setState({
            cart: tempCart
        })
    }

    añadirEnCesta = (bike) => {
        const index = this.state.cart.find(item => item.id === bike.id)

        if (index === undefined) {
            let tempCesta = [];
            bike.count ++
            tempCesta.push(bike)
            this.setState((prevState) => {
                return {
                    cart: [...prevState.cart, ...tempCesta]
                }
            }, ()=> this.addTotals())
        }
        console.log('Funciona')
    }

    removeItem = (id)=>{
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id)
        this.setState({
            cart: tempCart
        }, ()=> this.addTotals())
    }

    incrementar = (id) => {
        let tempCesta = [...this.state.cart];
        const selectedProduct = tempCesta.find(item => item.id === id);
        const index = tempCesta.indexOf(selectedProduct)
        const product = tempCesta[index]
        product.count = product.count += 1
        product.total = product.count * product.price

        this.setState({
            cart: tempCesta
        },()=> this.addTotals())
    }

    reducir = (id) => {
        let tempCesta = [...this.state.cart];
        const selectedProduct = tempCesta.find(item => item.id === id);
        const index = tempCesta.indexOf(selectedProduct);
        const product = tempCesta[index]

        if(product.count === 1){
            this.removeItem(id)
            console.log('Hola')
        }else{
            product.count = product.count -= 1;
            product.total = product.count * product.price
            this.setState({
                cart: tempCesta
            },() => this.addTotals())
        }
    }

    addTotals = () => {
        let total = 0;
        this.state.cart.map(item => total += (item.price * item.count))
        let subTotal = (total * 0.8264).toFixed(2);
        let tax = (subTotal*0.21).toFixed(2)
        this.setState({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        })
    }

    setProducts = () => {
        let tempBikes = [];
        items.forEach(item => {
            const singleItem = { ...item }
            tempBikes = [...tempBikes, singleItem]
        });
        this.setState({
            bikes: tempBikes
        })
    }

    setSlug = (newSlug) => {
        this.setState({
            slug: newSlug
        })
    }

    getBike = (slug) => {
        let tempBikes = [...this.state.bikes];
        const bike = tempBikes.find((bike) => bike.slug === slug)
        return bike
    }

    setFeaturedProducts = () => {
        let tempProducts = items.filter(item => item.featured === true);
        this.setState({
            featuredProducts: tempProducts
        })
    }

    setSortedProducts = () => {
        const { bikes } = this.state
        let tempProducts = [...bikes]
        this.setState({
            sortedBikes: tempProducts
        })
    }

    handleChange = (e) => {
        const target = e.target
        const value = target.value;
        const name = target.name
        this.setState({
            [name]: value
        }, this.filterBikes)
    }

    filterBikes = () => {
        let { bikes, type, price } = this.state
        let tempBikes = [...bikes];
        if (type !== 'Todas') {
            tempBikes = tempBikes.filter(bike => bike.type === type)
        }
        price = parseInt(price)

        tempBikes = tempBikes.filter(bike => bike.price <= price)

        this.setState({
            sortedBikes: tempBikes
        })


    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                getBike: this.getBike,
                setProducts: this.setProducts,
                componentDidUpdate: this.componentDidUpdate,
                setSlug: this.setSlug,
                handleChange: this.handleChange,
                añadirEnCesta: this.añadirEnCesta,
                incrementar: this.incrementar,
                reducir: this.reducir,
                clearCart: this.clearCart,
                removeItem: this.removeItem
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };