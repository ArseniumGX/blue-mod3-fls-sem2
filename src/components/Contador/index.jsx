import React, { useState } from 'react'
import './style.css'

function Contador(){
    
    const [ contagem, setContagem ] = useState(0)
    
    const handleButton = () => setContagem( contagem + 1 )

    return(
        <main>
            <h1>Contador de Clicks</h1>
            <button onClick={ handleButton }>Click!</button>
            <p>Clicou { contagem } vez{ contagem > 1 ? 'es' : ''}!</p>
        </main>
    )
}

export default Contador