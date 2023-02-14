import React, { useState } from 'react'
import './Calculadora.css'
import Container from '@mui/material/Container'
import { Box } from '@mui/system'

export default function Calculadora() {
    const [numero, setNumero] = useState(0);
    const [numeroAnterior, setNumeroAnterior] = useState(0);
    const [operador, setOperador] = useState(0);
    
    function inputNumero(e) {
        let valor = e.target.value;
        if(numero === 0){
            setNumero(valor)
        } else {
            setNumero(numero + valor)
        }
    }

    const clear = () => {
        setNumero(0)
    }

    const porcentagem = () => {
        setNumero(numero / 100)
    }

    const mudarSinal = () => {
        if(numero > 0) {
            setNumero( - numero)
        } else {
            setNumero(Math.abs(numero))
        }
    }

    const resultadoFinal = () => {
        if (operador == "/") {
            setNumero(numeroAnterior / numero);
        } else if ( operador == "x"){
            setNumero(numeroAnterior * numero)
        } else if ( operador == "+"){
            setNumero(parseFloat(numeroAnterior) + parseFloat(numero))
        } else if ( operador == "-"){
            setNumero(numeroAnterior - numero)
        }
        console.log(numeroAnterior)
        console.log(numero)
        console.log(operador)
    }

    const operadorEscolhido = (e) => {
        let operator = e.target.value
        setOperador(operator)
        setNumeroAnterior(numero);
        setNumero(0);
    }

  return (
    <div>
        <Box m={(5)}/>
        <Container maxWidth="xs">
            <div className='container'>
                <Box m={(12)}/>
                <h1 className='resultado'>{numero}</h1>
                <button onClick={clear}>AC</button>
                <button onClick={mudarSinal}>+/-</button>
                <button onClick={porcentagem}>%</button>
                <button className='laranja' onClick={operadorEscolhido} value="/">/</button>
                <button className='cinza' onClick={inputNumero} value={1}>1</button>
                <button className='cinza' onClick={inputNumero} value={2}>2</button>
                <button className='cinza' onClick={inputNumero} value={3}>3</button>
                <button className='laranja' onClick={operadorEscolhido} value="x">x</button>
                <button className='cinza' onClick={inputNumero} value={4}>4</button>
                <button className='cinza' onClick={inputNumero} value={5}>5</button>
                <button className='cinza' onClick={inputNumero} value={6}>6</button>
                <button className='laranja' onClick={operadorEscolhido} value="-">-</button>
                <button className='cinza' onClick={inputNumero} value={7}>7</button>
                <button className='cinza' onClick={inputNumero} value={8}>8</button>
                <button className='cinza' onClick={inputNumero} value={9}>9</button>
                <button className='laranja' onClick={operadorEscolhido} value="+">+</button>
                <button className='cinza' onClick={inputNumero} value={"."}>,</button>
                <button className='cinza' onClick={inputNumero} value={0}>0</button>
                <button className='cinza' style={{visibility: "hidden"}}>,</button>
                <button className='laranja' onClick={resultadoFinal}>=</button>
            </div>
        </Container>
    </div>
  )
}

