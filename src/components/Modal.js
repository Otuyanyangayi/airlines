import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Modal } from 'react-bootstrap';

const ModalDetails = ({ isOpen, onClose: closeMOdal, details }) => {

  useEffect(
    () => {
      console.log(closeMOdal)
    }
    , [])


  return (
    <div className="modal show"
      style={{ display: 'block', position: 'absolute',color: 'blue', textAlign: 'center' }} >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={closeMOdal}>
          <Modal.Title>More Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={details.logo} alt=".." />

          <h4>"{details.slogan}"</h4>
          <a href={details.website}>{details.website}</a>
          <h5>{details.established}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeMOdal} >Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ModalDetails;