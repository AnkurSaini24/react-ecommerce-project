import React from 'react'
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     {id:1,name:'shoes',description:'Running Shoes.',price:'$5',image:'https://images-na.ssl-images-amazon.com/images/I/51DSD3KP-qL._UL1021_.jpg'},
//     {id:2,name:'Macbook',description:'Apple Macbook.',price:'$10',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7lAWwMyWurR2TtmV-uadNKIyto8Do5qD0A&usqp=CAU'},
// ];

const  Products = ({products,onAddToCart}) =>  {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12}  sm={6} md={4} lg={3}>
                       <Product product={product}  onAddToCart={onAddToCart}/>                       
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
