import axios from 'axios'
import React, { useState } from 'react'

function ManyRenderBug() {

    //const [number, setnumber] = useState(0)
    //var randomNumber = Math.random() * 1000
    // setnumber(randomNumber)
    const [categories, setcategories] = useState([])

    axios.get('https://northwind.vercel.app/api/categories')
    .then(res => {
       // setcategories(res.data)
    })

    return (<>
    <ul>
        {
            categories.map(item => <li>{item.name}</li>)
        }
    </ul>
        {/* <h1>{number}</h1> */}
    </>
    )
}

export default ManyRenderBug