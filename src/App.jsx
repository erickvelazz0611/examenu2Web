import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import CardInfo from './componentes/cardInfo';
import CardPersonaje from './componentes/cardPersonaje';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Row>
      <Col>
      <CardInfo />
      </Col>
    </Row>
    <Row>
      <Col>
      <CardPersonaje />
      </Col>
    </Row>
    </>
  )
}

export default App
