import React, { useState } from 'react'

function StateSample2() {
  
    const [randomNumbers, setrandomNumbers] = useState([2,5])

    const addRandom = () => {
        let random = Math.floor(Math.random() * 100)
        setrandomNumbers([...randomNumbers, random])
    }
  
  return (<>
  <button onClick={addRandom}>Add Random Number</button>
        <hr />
        <ul>
            {
                randomNumbers.map((number, index) => {
                    return <li key={index}>{number}</li>
                })
            }
        </ul>
  </>
  )
}

export default StateSample2