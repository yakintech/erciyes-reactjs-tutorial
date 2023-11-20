import React, { useState } from 'react'
import { suppliersData } from '../data/suppliers'

function StateObjectArraySample() {

    const [suppliers, setsuppliers] = useState(suppliersData)
    const [favorites, setfavorites] = useState([])

    const deleteSupplier = (id) => {

        var isDeleted = window.confirm("Are you sure?")

        if (isDeleted) {
            var filteredSuppliers = suppliers.filter(q => q.id != id)
            setsuppliers(filteredSuppliers)
        }
    }

    const addFav = (item) => {
        //fav control
        var isExist = favorites.find(q => q.id == item.id)
        if (isExist) {
            alert("Already exist")
            return;
        }
        var newFavorites = [...favorites, item]
        setfavorites(newFavorites)
    }

    return (<>
        <h1>Count: {suppliers.length}</h1>
        <h1>Favorites: {favorites.length}</h1>

        <hr />
        <button onClick={() => setsuppliers([])}>Empty</button>

        <hr />

        <div>
        <table>
            <thead>
                <tr>
                    <th>Supplier Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Delete</th>
                    <th>Add To Fav</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map((supplier, index) => {
                        return (
                            <tr key={index}>
                                <td>{supplier.id}</td>
                                <td>{supplier.companyName}</td>
                                <td>{supplier.contactName}</td>
                                <td><button onClick={() => deleteSupplier(supplier.id)}>Delete</button></td>
                                <td><button onClick={() => addFav(supplier)}>Add To Fav</button></td>
                            </tr>
                        )
                    }
                    )
                }
            </tbody>
        </table>
                <hr />
        <table>
                <thead>
                    <tr>
                        <th>Supplier Id</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        favorites.map((supplier, index) => {
                            return (
                                <tr key={supplier.id}>
                                    <td>{supplier.id}</td>
                                    <td>{supplier.companyName}</td>
                                    <td>{supplier.contactName}</td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
        </table>
        </div>
       
    </>
    )
}

export default StateObjectArraySample