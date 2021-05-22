import React from "react";
import { Link } from 'react-router-dom'
// import { LinkStyled } from '../ItemDetail/styles'
// import { ItemCountContainerStyle, Button, Span } from "./styles";
import { Container, Row, Col, Button} from 'reactstrap'
function ItemCount({ counter, stockItem, onSumar, onRestar, onAdd, cart, clearCount }) {
	const isDisabled = counter === 0 ? true : false;
	const isDisabledAdd = stockItem === 0 ? true : false;
	
	return (
		<Container >
			<Row>
				<Row className="justify-content-center">
					<Col sm="6" className="text-center">
						<span>
							Stock: {stockItem}
						</span>
					</Col>
				</Row>
				<Row className="justify-content-center align-items-center">
					<Col className="col-auto">
						<Button
							className="btn rounded-circle"
							onClick={onRestar}
							disabled={isDisabled}
						>
							-
						</Button>
					</Col>
					<Col className="col-auto">
						<span>
							{counter}
						</span>
					</Col>
					<Col className="col-auto">
						<Button
							className="btn rounded-circle"
							onClick={onSumar}
							disabled={isDisabledAdd}
						>
							+
						</Button>
					</Col>
				</Row>
				<Row className="justify-content-center pt-3">
					<Col sm="6">
						<Button
						onClick={() => {
							onAdd(counter)
							clearCount()
						}}
						disabled={isDisabled}
						>
							Agregar al carro
						</Button>
					</Col>
					<Col sm="6">
						{cart.length > 0 &&
							<Link to='/cart'>
								<Button> 
									Terminar Compra
								</Button> 
							</Link> 
						}
					</Col>
				</Row>
			</Row>
		</Container>
	);
}
export default ItemCount;
