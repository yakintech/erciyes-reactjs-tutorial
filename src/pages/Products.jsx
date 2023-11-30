import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/CartSlice'

function Products() {

    const [products, setproducts] = useState([])

    //connect to favContext
     const { favorites, setFavorites } = useContext(FavoritesContext)

     let dispatch = useDispatch()

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(json => setproducts(json))
            .catch(err => console.log(err))

    }, [])


    const favOperation = (product) => {

        //fav check
        const check = favorites.find(f => f.id === product.id)

        if (check) {
            //remove from fav
            const filtered = favorites.filter(f => f.id !== product.id)
            setFavorites(filtered)
        }
        else {
            //add to fav
            setFavorites([...favorites, product])
        }
     
    }


    const add = (item) => {
        dispatch(addToCart(item))
    }


    return (<>
        <h1>Products</h1>
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Add To Fav</th>
                    <th>Add To Cart</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td><Link to={`/products/` + product.id}>{product.id}</Link></td>
                        <td>{product.name}</td>
                        <td>{product.unitPrice.toFixed(2)}</td>
                        <td>{product.unitsInStock}</td>
                        <td><button onClick={() => favOperation(product)}>
                            {
                                favorites.find(f => f.id === product.id) ?
                                    <span>Remove From Fav</span> :
                                    <span>Add To Fav</span>
                            }
                            </button></td>
                            <td>
                                <button onClick={() => add(product)}>Add To Cart</button>
                            </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}

export default Products