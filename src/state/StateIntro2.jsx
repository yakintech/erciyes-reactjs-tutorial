import React, { useState } from 'react'

function StateIntro2() {

    const [color, setcolor] = useState("black")

    const change = () => {
        setcolor('tomato')
    }

  return (<>
  <button onClick={change}>Change Color</button>
  <div style={{backgroundColor:color, width:200, height:200}}> 

  </div>
  </>
  )
}

export default StateIntro2