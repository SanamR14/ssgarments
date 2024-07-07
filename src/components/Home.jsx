import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Products/Product';
import img from '../asserts/kids1.png';
import { Navbar } from '.';

const products = [
    {id:1, name: 'Shirt', description:'Formal Shirt', size:'32', price:'Rs.499',image: img },
    {id:2, name: 'Jean', description:'Casual Jean', size:'30', price:'Rs.799', image: img },
    {id:3, name: 'Shirt', description:'Formal Shirt', size:'32', price:'Rs.499',image: img },
    {id:4, name: 'Jean', description:'Casual Jean', size:'30', price:'Rs.799', image: img },
    {id:5, name: 'Shirt', description:'Formal Shirt', size:'32', price:'Rs.499',image: img },
    {id:6, name: 'Jean', description:'Casual Jean', size:'30', price:'Rs.799', image: img },
]

const Home = () => {
  return (
    <main>
        <Navbar />
        <Grid container justifyContent='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Home