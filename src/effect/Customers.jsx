import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Customers() {

  const [customers, setcustomers] = useState([])

  useEffect(() => {
    loadCustomers();
  }, [])

  const loadCustomers = () => {
    axios.get('https://northwind.vercel.app/api/customers')
    .then(res => {
      setcustomers(res.data)
    })
  }

  const deleteCustomer = (id) => {
    var isDelete = window.confirm('Are you sure?');
    if(!isDelete) return;
    axios.delete('https://northwind.vercel.app/api/customers/' + id)
    .then(res => {
      loadCustomers();
    })
  }

  return (<>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Company Name</th>
        <th>Contact Name</th>
        <th>Contact Title</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        customers.map(item => <tr>
          <td><Link to={`/customers/${item.id}`}>{item.id}</Link></td>
          <td>{item.companyName}</td>
          <td>{item.contactName}</td>
          <td>{item.contactTitle}</td>
          <td><button onClick={() => deleteCustomer(item.id)}>Delete</button></td>
        </tr>)
      }
    </tbody>
  </table>
  </>
  )
}

export default Customers