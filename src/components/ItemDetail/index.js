import React from "react";
import ItemCountContainer from "../ItemCountContainer";
import { Container, Row, Col, Jumbotron } from 'reactstrap'

const ItemDetail = ({title, description, stock, image, price, onAdd, id, cart, stockItem, isInCart }) => {
  return (
    <Container>
		<Row>
			<Col>
				<Jumbotron>
					
					<h1 className="display-3">{title}</h1>
					{image ? 
						<img src={image} alt={`img${title}`}/> : 
						<div className="spinner-border" role="status"/>
						
					}
					<h4>Valor: ${price}</h4>
					<h4>Descripción</h4>
					<p className="lead">{description}</p>
					<hr className="my-2" />
					<ItemCountContainer stock={stock} onAdd={onAdd} title={title} id={id} cart={cart} stockItem={stockItem} isInCart={isInCart}/>
				</Jumbotron>
			</Col>
		</Row>
    </Container>
  );
};

export default ItemDetail;