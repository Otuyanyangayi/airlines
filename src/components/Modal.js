import React, { useEffect } from "react";
import { Button  } from "react-bootstrap";

const Modal = ({ isOpen, onClose:closeMOdal, details}) => {

useEffect(
()=>{
  console.log(closeMOdal)
}
,[])

  
    return (
<div>
  <img src={details.logo} alt=".." />
  <h4>{details.slogan}</h4>
  <a href={details.website}>{details.website}</a>
  <p>{details.established}</p>
  <Button onClick={closeMOdal} >Close</Button>
</div>
      );
  };

export default Modal;