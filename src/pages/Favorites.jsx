import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

function Favorites() {

    //getfavorites products from context
    const { favorites, setFavorites } = useContext(FavoritesContext)

    //remove from fav
    const remove = (product) => {

        //confirm dialog after remove product from favorites
        if (window.confirm('Are you sure?')) {

            //remove from fav
            const filtered = favorites.filter(f => f.id !== product.id)
            setFavorites(filtered)
        }

    }

    //fill the table
    return (<>
        <h1>Favorites</h1>
        <hr />

        <button onClick={() => setFavorites([])} >Empty</button>
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {favorites.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.unitPrice.toFixed(2)}</td>
                        <td>{product.unitsInStock}</td>
                        <td><button onClick={() => remove(product)}>Remove</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}

export default Favorites