import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FavoritesContext } from '../context/FavoritesContext'

function ProductDetail() {

    const { id } = useParams()
    const [detail, setdetail] = useState({})

    //connect to fav context
    const { favorites, setFavorites } = useContext(FavoritesContext)

    useEffect(() => {

        fetch(`https://northwind.vercel.app/api/products/${id}`)
            .then(res => res.json())
            .then(json => setdetail(json))
            .catch(err => console.log(err))

    }, [])

    const navigate = useNavigate();


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

    return (<>
        <h1>Detail</h1>
        <hr />
        <h3>Id: {detail.id}</h3>
        <h3>Name: {detail.name}</h3>
        <h3>Unit Price: {detail.unitPrice}</h3>
        <h3>Units In Stock: {detail.unitsInStock}</h3>
        <hr />
        <button onClick={() => favOperation(detail)}>{favorites.find(f => f.id === detail.id) ? 'Remove From Fav' : 'Add To Fav'}</button>

        <hr />
        {/* Go Back Button */}
        <button onClick={() => navigate(-1)}>Go Back</button>

    </>
    )
}

export default ProductDetail