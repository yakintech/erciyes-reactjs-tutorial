import React from 'react'
import { suppliers } from '../data/suppliers'
import { Link } from 'react-router-dom'

function Suppliers() {



    return (<>
        <ul>
            {
                suppliers.map((item) => <li><Link to={`/suppliers/${item.id}`}>{item.companyName}</Link></li>)
            }
        </ul>
    </>
    )
}

export default Suppliers