import React from "react";
import ItemCountContainer from "../ItemCountContainer";
import { Container, Row, Col, Card } from 'reactstrap'

const ItemDetail = ({title, description, stock, image, price, onAdd, id, cart, stockItem, isInCart }) => {
  return (
    <Container className="pt-5">
		<Row className="d-flex justify-content-center p-4">
			<Col sm="6">
				{image ? 
					<img style={{width:'100%'}} src={image} alt={`img${title}`}/> : 
					<div className="spinner-border" role="status"/>
				}
			</Col>
			<Col sm="6">
				<Card>
					<div className="p-4">
						<h2>{title}</h2>
						
						<hr/>
						<h5>Descripción</h5>
						<p>{description}</p>
						<hr/>
						<h4>${price}</h4>
						<ItemCountContainer stock={stock} onAdd={onAdd} title={title} id={id} cart={cart} stockItem={stockItem} isInCart={isInCart}/>
					</div>
				</Card>
			</Col>
		</Row>
    </Container>
  );
};

export default ItemDetail;