import React from 'react'
import {Card } from 'react-bootstrap';


function Footer() {
    return (
        <Card className="text-copyright">
  <Card.Header>© 2021 Copyright: Yasin Elhilo</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
    )
}

export default Footer
