import axios from 'axios'
import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [categories, setcategories] = useState([])

    //useEffect içerisindeki kod SADECE bir kez çalışır
    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/categories')
            .then(res => {
                setcategories(res.data)
            })

    }, [])

    return (<>
        <ul>
            {
                categories.map(item => <li>{item.name}</li>)
            }
        </ul>
    </>)
}

export default EffectSample