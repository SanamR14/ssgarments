import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import image from '../../asserts/kids1.png';
import UseStyles from './styles';
import { ShoppingCart} from '@material-ui/icons';
const navbar = () => {
    const classes = UseStyles();
  return (
    <>
        <AppBar position='relative' className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography varient="h6" className={classes.title} color="inherit">
                    <img src={image} alt="SS Garments" className={classes.image} height="25px" />
                    SS Garments
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button} />
                <IconButton aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={0} color='secondary'>
                        <ShoppingCart />
                    </Badge>
                </IconButton>

            </Toolbar>
        </AppBar>
    </>
  )
}

export default navbar