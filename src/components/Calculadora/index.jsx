import React, { useState } from 'react'
import './style.css'

const Field = props => {
    return(
        <div>
            <label htmlFor={props.name}>{props.name.toUpperCase()}</label>
            <input 
                type="number" 
                name={props.name} 
                id={props.name} 
                value={props.valor} 
                onChange={props.onChange}
            />
        </div>
    )
}

function Calculadora(){
    const [ valor, setValor ] = useState('')
    const [ porcentagem, setPorcentagem ] = useState('')

    return(
        <main>
            <h1>Calculadora de Gorgeta</h1>
            <Field name="valor" valor={ valor } onChange={ e => setValor(e.target.value) }/>
            <Field name="porcentagem" valor={ porcentagem } onChange={ e => setPorcentagem(e.target.value) }/>
            <hr/>
            <p>Valor da conta: <span>R$ { Number(valor).toFixed(2) }</span></p>
            <p>O percentual: <span>{ Number(porcentagem) }%</span></p>
            <p>Valor total: <span>R$ { (Number(valor) + Number(valor) * Number(porcentagem) / 100).toFixed(2) }</span></p>
        </main>
    )
}

export default Calculadora