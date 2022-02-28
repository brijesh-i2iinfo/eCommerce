import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Container, Grid } from '@material-ui/core'
import Row from 'react-storefront/Row'

function Item(props) {
  return (
    <div>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Grid xs={12} md={6}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
          </Grid>
          <Grid xs={12} md={6}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
          </Grid>
        </div>
      </Container>

      <Button className="CheckButton">Check it out!</Button>    
    </div>
  )
}

function CarouselBanner(props) {
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ]

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}
export default CarouselBanner
