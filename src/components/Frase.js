import React from 'react';
import styled from '@emotion/styled'

const CajaFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: white;
  max-width: 800px;
  @media (min-width: 992px){
    margin-top: 15rem;
    h1 {
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
      position: relative;
      padding-left: 4rem;

      &::before{
        content: open-quote;
        font-size: 5rem;
        color:black;
        position: absolute;
        left: -1rem;
        top: -2rem;
      }
    }
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: .4rem;

  }
  h3{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.3rem;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`

const Frase = ({frase}) => {

  return(
    <CajaFrase>
        <h1>{frase.quote}</h1>
        <h3>- {frase.author}</h3>
    </CajaFrase>
  )
}

export default Frase;
