import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../store/CartSlice';



function Cart() {

    //connect to my cart slice
    //useselector ile cart state'ine erişeceğiz
    const { cart } = useSelector(state => state.cart)


    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.quantity * item.unitPrice
    }
    )

    let dispatch = useDispatch()

    const remove = (item) => {
        dispatch(removeFromCart(item))
    }

    return (<>
        <h1>Total Price: {totalPrice.toFixed(2)}</h1>
        <hr />
        <button onClick={() => dispatch(emptyCart())} >Empty</button> 
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.productName}</td>
                            <td>{item.unitPrice.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td>{(item.quantity * item.unitPrice).toFixed(2)}</td>
                            <td><button onClick={() => remove(item)}>Remove</button></td>
                            
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
    )
}

export default Cart