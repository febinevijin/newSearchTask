import React, { useContext } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import AuthContext from '../context/AuthContext'

const Display = () => {

  
  const {finalValue} =  useContext(AuthContext)

  return (
<>
{finalValue ? finalValue.map((item)=>(
  <Col md={3} className="my-2">
  <Card style={{ width: '18rem' }}>

<Card.Body>
  <Card.Title>{item.Name}</Card.Title>
  <Card.Text>
    Current market price: {item.CurrentMarketPrice}
  </Card.Text>

  <Card.Text>
    Stock P/E: {item.PE}
  </Card.Text>

  <Card.Text>
    ROCE % : {item.ROCE}
  </Card.Text>

  <Card.Text>
    Reserves: {item.Reserves}
  </Card.Text>
  
</Card.Body>
</Card> 
</Col>
)) : <h3>no item</h3>}


</>


  )
}

export default Display