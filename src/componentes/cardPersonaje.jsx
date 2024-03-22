import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import moto1 from "../assets/panigalle.jpg";
import moto2 from "../assets/streetfighter.jpg";
import "./cardInfo.css";


export default function CardPersonaje() {
  const [showCard, setShowCard] = useState(null);

  const handleCardShow = (personaje) => {
    setShowCard(personaje);
  };

  const CardPersona = ({ persona }) => (
    <Card style={{ width: "400px", backgroundColor: persona.back }} className="cardperfil">
      <Row>
        <Col>
          <Card.Img variant="top" src={persona.imagen} className="motos"  />
        </Col>
      </Row>

      <Card.Body>
        <Card.Title>Información</Card.Title>
        <Card.Text className="texto">
          {persona.nombre} <br />
          {persona.potencia}  <br />
          {persona.cilindrada} <br />

        </Card.Text>
      </Card.Body>
    </Card>
  );

  return (
    <>
      <Row className="m-3 ">
        <Col>
          <Button
            variant="outline-dark"
            onClick={() =>
              handleCardShow({
                nombre: "Ducatti Panigale",
                potencia: '215 CV a 13.000 rpm',
                cilindrada: '1103 cc',
                imagen: moto1,
                back: 'lightblue',
              })
            }
          >
            Personaje 1
          </Button>
        </Col>

        <Col>
          <Button
            variant="outline-dark"
            onClick={() =>
              handleCardShow({
                nombre: "Ducati Streetfighter V2",
                potencia: '153 hp',
                cilindrada: '955 cc',
                imagen: moto2,
                back: 'lightgray',
              })
            }
          >
            Personaje 2
          </Button>
        </Col>
      </Row>

      {showCard && <CardPersona persona={showCard} />}
    </>
  );
}
