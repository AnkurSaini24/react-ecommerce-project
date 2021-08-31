import React from 'react'
import { Container , Typography , Button , Grid ,Paper} from '@material-ui/core'
import { Link } from 'react-router-dom';



import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const  Cart = ({cart,handleUpdateCartQty,handleRemoveFromcart,handleEmptyCart}) =>  {

    const classes = useStyles();


    //const isEmpty = !cart.line_items.length;
    //console.log(isEmpty);
    // const isEmpty=0;
    // if(Object.keys(cart).length > 0 ){
    //    isEmpty=true;
    // }
    // else{
    //     isEmpty=false;
    // }
     
    

    const isEmpty=!Object(cart.line_items).length;
    console.log('Empty Value :- ' + isEmpty);

  


    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart , start adding some!
            <Link to="/" className={classes.link}> Start adding some</Link>
        </Typography>
    );


    
    
//     console.log(Object.keys(cart).length);  


//     if(Object(cart) != undefined){
//         console.log(Object(cart).line_items);
//         console.log(Object(cart.line_items).length);
//     }

//     if(Object.keys(cart).length > 0)  {     
//     for(var i=0;i<4;i++){
//          console.log(Object.keys(cart).length);
//         console.log(cart.line_items[i].name); 
//     }
// }

    
    
      

    

     const FilledCart = () => (
                 <>
                    <div className={classes.toolbar} />
                    <Grid container justifyContent="center" spacing={4}>
                        {cart.line_items.map((item) => (
                            <Grid item key={item.id} xs={12}  sm={6} md={4} lg={3}>                              
                            <CartItem item ={item}  onUpdateCartQty={handleUpdateCartQty}   onRemoveFromCart={handleRemoveFromcart} />                  
                            </Grid>
                        ))}
                    </Grid>
                    <div className={classes.cardDetails}>
                        <Typography variant="h4">
                            Subtotal:{ cart.subtotal.formatted_with_symbol } 
                        </Typography>
                        <div>
                            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                            <Button  component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>                    
                        </div>
                    </div>
                </>
                
     ); 
      

    if(!cart.line_items) return 'loading...'                   

    return ( 
        <Container>
            <div  className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>            
            { isEmpty ? <EmptyCart /> : <FilledCart /> }          
        </Container>  
    )
}

export default Cart
