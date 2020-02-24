import React, { useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Button, Form, Container,Card, Col, Row } from 'react-bootstrap'

function App() {


  const [retrieval, setData] = useState([]);
  const [code, setCode] = useState();


  const hentinfo = () => {
    
    axios.get('http://localhost:9001/')
      .then(function (response) {

        setData(response.data)
      })
  }

  const sendCode = () => {

    console.log(printLines())
    axios.post('http://localhost:9001/', { "codeLines" : JSON.stringify(printLines()) })
      .then(function (response) {
        hentinfo()
      })
  }

  const printLines = () => {
    var lines = code.split('\n')
    return lines
  }

  return (
    <Container>
      
      <Row>
        <Form.Control onChange={event => setCode(event.target.value)} as="textarea" rows="5" />
        <Button onClick={() => sendCode()}>Kjør kode</Button>
      </Row>

      {retrieval.slice(0).reverse().map(line=>
        
        <p>{line}</p>
        
        
      )}

      <Button className="align-center" onClick={() => hentinfo()}>hentinfo</Button>
      
      <Button onClick={()=> printLines()}>POrint llines</Button>

    </Container>
  );
}

export default App;
