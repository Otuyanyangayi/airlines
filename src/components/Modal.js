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
  <h1>{details.slogan}</h1>
  <Button onClick={closeMOdal} >Close</Button>
</div>
      );
  };

export default Modal;