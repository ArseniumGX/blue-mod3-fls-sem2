import React, {useState} from 'react'

function DinamicText(){
    const [ texto, setTexto ] = useState('')
    
    const handleInput = e => setTexto(e.target.value)

    return(
        <>
            <input type="text" value={ texto } onChange={ handleInput } />
            <p>{ texto.length } caracter{ texto.length > 1 ? 'es' : '' }!</p>
            <p>{ texto }</p>
        </>
    )
}

export default DinamicText