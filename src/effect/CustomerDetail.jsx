import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function CustomerDetail() {

    const [detail, setdetail] = useState({});
    const [loading, setloading] = useState(true)

    const { id } = useParams();

    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/customers/' + id)
            .then(res => {
                setdetail(res.data)
                setloading(false)
            })
    }, [])


    return (<>
        {
            loading ? <h1>loading...</h1> : <><h1>Detail</h1>
                <h2>Company Name: {detail?.companyName}</h2>
                <h2>Contact Name: {detail?.contactName}</h2>
                <h2>Contact Title: {detail?.contactTitle}</h2>
                <h2>Address: {detail?.address?.street}</h2>
                <h2>City: {detail?.address?.city}</h2>
                <h2>Region: {detail?.address?.region}</h2>
                <h2>Postal Code: {detail?.address?.postalCode}</h2>
                <h2>Country: {detail?.address?.country}</h2>
                <h2>Phone: {detail?.address?.phone}</h2></>
        }

    </>
    )
}

export default CustomerDetail