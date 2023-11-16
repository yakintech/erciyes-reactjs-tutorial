import React from 'react'
import { useParams } from 'react-router-dom'
import { suppliers } from '../data/suppliers'

function SupplierDetail() {

  const { id } = useParams()

  var supplier = suppliers.find(q => q.id == id);

  return (<>
    <h1>Detail</h1>
    <h2>Company Name: {supplier?.companyName}</h2>
    <h2>Contact Name: {supplier?.contactName}</h2>
    <h2>Contact Title: {supplier?.contactTitle}</h2>

  </>
  )
}

export default SupplierDetail