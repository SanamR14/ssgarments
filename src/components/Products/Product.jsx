import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles'

const Product = ({ product }) => {

    const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image} title={product.name} />
        <CardContent >
            <div className={classes.cardContent}>
                <Typography varient="h3" gutterbutton>
                    {product.name}
                </Typography>
                <Typography varient="h3" >
                    {product.price}
                </Typography>
            </div>
            <Typography varient="h2" color="textSecondary">
                {product.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
            <IconButton area-label="Add to Cart">
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product