import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import imgPerfil from '../assets/erick.jpeg';
import Image from 'react-bootstrap/Image';
import './cardInfo.css';

import React from 'react';


export default function CardInfo() {
  return (
    <>
    
    <Card style={{ width: '400px', backgroundColor:'cyan',  } }  >
      <Row>
        <Col>
        <Card.Img variant="top" src={imgPerfil} className='perfil cardPerfil' />
        </Col>
      </Row>
  
      <Card.Body>
        <Card.Title>Información Personal</Card.Title>
        <Card.Text>
          Nombre: Erick Emiliano Morales Velazquez <br />
          Edad: 19 años <br />
          Estudiante de Ingenieria en Desarrollo de Software Multiplataforma <br />
          Correo: 20223tn101@utez.edu.mx <br />
        Teléfono: 777 257 97 88 <br />
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}   