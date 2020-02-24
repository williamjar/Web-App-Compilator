import React, { useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Button, Form, Container, Card, Col, Row } from 'react-bootstrap'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const code = function add(a, b) {
  return a + b;
}


function App() {


  const [retrieval, setData] = useState([]);
  const [code, setCode] = useState('');


  const hentinfo = (res) => {
    axios.get('http://localhost:9001/')
      .then(function (response) {

        setData(response.data)
      })
  }

  const sendCode = () => {
    axios.post('http://localhost:9001/', { "codeLines": JSON.stringify(printLines()) })
    
    hentinfo()
  }

  const printLines = () => {
    var lines = code.split('\n')
    return lines
  }

  return (
    <Container>

      <Row>
        <Form.Control onChange={event => setCode(event.target.value)} as="textarea" rows="5" />
      </Row>
      <Row><SyntaxHighlighter language="javascript" style={darcula}>{code}</SyntaxHighlighter></Row>

      <Row><Button onClick={() => sendCode()}>Kjør kode</Button></Row>



      <Row>
        <SyntaxHighlighter language="python" style={darcula}>
          {retrieval.reverse().map(line =>
            <p>{line}</p>

          )}
        </SyntaxHighlighter>



      </Row>



    </Container>
  );
}

export default App;
