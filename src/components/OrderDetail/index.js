import { useState, useEffect } from 'react'
import { Card, CardHeader, CardFooter, Button, ListGroup, ListGroupItem} from 'reactstrap'
import { Link, useParams } from 'react-router-dom'
import { getFirestore } from '../Firebase/firebase'
import './OrderDetail.css'

const OrderDetail = () => {
    //Location
    const { id } = useParams()
    
    //State
    const [order, setOrder] = useState(undefined);    
    const [loading, setLoading] = useState(false);

    //Effects
    useEffect(() => {
        if(id){
            const db = getFirestore()
            const orderCollection = db.collection('orders')
    
            setLoading(true)
            orderCollection.doc(id).get()
            .then((docRef) => {
                setOrder(docRef.data())
            })
            .catch((err) => {
            console.log("[OrderDetail] Error searching items ", err)
            })
            setLoading(false)
        } 
    }, [id]);

    return (
        <div className="Checkout">
            {
                order
                ? 
                <>
                    <h3 style={{textAlign: "center"}}>Su pedido ha sido realizado con éxito</h3>
                    <Card style={{marginTop: "1rem", fontSize: "1.5rem"}}>
                        <CardHeader style={{textAlign: "center", fontWeight: "500"}}>ID de su Pedido: {id}</CardHeader>
                        <ListGroup>
                            {
                                order.items.map((orderDetail,i) => 
                                    <ListGroupItem key={i}>
                                        {orderDetail.quantity} x {orderDetail.title} <span style={{float: "right"}}>$ {orderDetail.price}</span>
                                    </ListGroupItem>
                                )
                            }
                            <ListGroupItem >
                                Envío <span style={{float: "right"}}>$ 500</span>
                            </ListGroupItem>
                        </ListGroup>
                        <CardFooter style={{textAlign: "right", fontWeight: "500"}}>
                            Total: $ {order.total} 
                        </CardFooter>
                    </Card>
                    <div id="ReturnBtnContainer" style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}>
                        <Button tag={Link} to="/" style={{maxWidth: "10rem", display:"flex", alignSelf: "center"}}>Volver al inicio</Button>
                    </div>
                    
                </> 
                :
                <>
                    {!loading ? <h3>Cargando...</h3> : <h3>Hubo un error al generar su pedido, intente nuevamente.</h3>}
                </>
            }
            
        </div>
        
    )

}

export default OrderDetail