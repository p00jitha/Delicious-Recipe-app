import React from 'react'
import './recipe.css'
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function ModalExample(props) {
    return (
      <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header style={{backgroundColor:"green",color:"white",fontFamily:"serif",fontWeight:"bolder"}} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"goldenrod",color:"white"}}> 
            <ol> 
                {props.ingre.map(ingredient=>( 
                    <>
                    <li>{ingredient.text}</li> 
                    </>
                ))} 
            </ol>  
            <p>Calories : {props.calories}</p> 
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"goldenrod",color:"white"}}>
          <Button onClick={props.onHide} style={{backgroundColor:"green"}}>Close</Button>
        </Modal.Footer>
                </Modal>
                </>
    );
  }
const Recipe = ({title,calories,image,ingredients,url}) =>{ 
    const [modalShow, setModalShow] = useState(false);
    return( 
        <>
        <div className='recipecontainer'>
            <img src={image} alt='recipe'/>
            <span className='recipename'>{title}</span>
           <span className='ingredients' onClick={() => setModalShow(true)}>Ingredients</span>
           <ModalExample show={modalShow} onHide={() => setModalShow(false)} ingre={ingredients} title={title} calories={calories}/>
            <span className='seemore' onClick={()=>window.open(url)}>See More</span>
        </div>
        </>
    ); 
  
} 

export default Recipe
