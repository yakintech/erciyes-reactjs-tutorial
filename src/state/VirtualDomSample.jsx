import React, { useState } from 'react'

function VirtualDomSample() {
    console.log('HELLO');
    const [counter, setcounter] = useState(0)

    const increase = () => {
        setcounter(5)
    }
  return (<>
  <div>
        <h1>Counter: <h2>{counter}</h2></h1>
    </div>
    <div>
        <button onClick={increase}>Increase</button>
    </div>
  </>
  )
}

export default VirtualDomSample