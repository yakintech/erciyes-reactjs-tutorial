import React, { useState } from 'react'

function StateSample() {

    let randomColors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "brown"]

    const [color, setcolor] = useState("black")

    const change = () => {
        let randomIndex = Math.floor(Math.random() * randomColors.length)
        setcolor(randomColors[randomIndex])
    }

  return (<>
    <button onClick={change}>Change Color</button>
    <hr />
    
    <div style={{width:200, height:200, backgroundColor:color}}>

    </div>
  </>
  )
}

export default StateSample