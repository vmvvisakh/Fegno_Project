import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Header.css'
import fegnoLogo from '../../assets/Fegno-logo.png'
import { BsCartDashFill } from "react-icons/bs";
import { Button, Modal } from 'react-bootstrap';
import { removefromCart } from '../../Redux/Slices/CartSlice';

function Header() {

    const cartItems = useSelector(state => state.cart.cart)
    const dispatch=useDispatch()
    

     //modal
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

  return (
    <div className='container-fluid px-5 pt-4'>
        <div className="d-flex justify-content-between">
            <img src={fegnoLogo} alt="" />
            <h6>
            <BsCartDashFill className='cursor-pointer' onClick={handleShow} size={30} />
                 <small className='ms-1'>{cartItems.length} </small>
            </h6>
        </div>

        {/* modal */}
        <Modal className='modalMain' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Items </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {cartItems ? (cartItems.map((obj,index) =>(
            <div key={index} className='d-flex mb-4 border-bottom pb-4'>
            <img src={ obj.image } style={{width: "55px", height:"60px"}} alt="" />
            <div className='d-flex flex-column'>
                <small className='ms-2 fw-bold'>{ obj.title }</small>
                <small className='ms-2'>RS {obj.price}</small>
                <small className='ms-2'>{obj.category}</small>
                <Button variant='warning' className='w-75 p-2 px-3 ms-2 mt-2' onClick={ () => dispatch(removefromCart({id: obj.id})) }>Remove Item</Button>
            </div>
            </div>
        ))): ""}
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
        
    </div>
  )
}

export default Header