import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../Redux/Slices/CartSlice';

function Content() {
    const[products,setProducts]=useState([])
    const dispatch = useDispatch()

    const truncateContent = (content, maxLength) => {
        if (content.length > maxLength) {
          return content.slice(0, maxLength) + '...';
        }
        return content;
      };
   
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/").then((Response)=>{
          console.log(Response.data);
        setProducts(Response.data);
        })  
        }, [])

  return (
    <div className='container-fluid px-5 pt-4'>
    <div className="row pt-5">
    {products.map((obj, index) => (
        <div className="col-md-6 col-lg-3 cursor-pointer" key={index}>
        <Card className='rounded-8 cursor-pointer'>
         <Card.Body>
         <Card.Img className='mb-3' style={{ height:"20rem" }} variant="top" src={obj.image}/>
         <Card.Title>{truncateContent(obj.title,38)}</Card.Title>
         <Card.Text>Rs {obj.price}</Card.Text>
         <Card.Text>{obj.category} </Card.Text>
         <Button variant="warning" className='cursor-pointer' onClick={() => dispatch(addtoCart({image:obj.image,price:obj.price,category:obj.category,title:obj.title,id:obj.id}))}>Add to Cart</Button>  
        </Card.Body>
         </Card><br />
        </div>
    ))
    
    }
    </div>
   
    </div>
  )
}

export default Content