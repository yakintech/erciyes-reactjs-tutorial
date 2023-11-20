import React, { useState } from 'react'

function StateBug() {

    const [number, setnumber] = useState(0)

    var random = Math.floor(Math.random() * 100)
    setnumber(random)

    return (<>
        <h1>{number}</h1>
    </>
    )
}
export default StateBug