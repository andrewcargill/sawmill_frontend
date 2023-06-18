import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <h1>About Page</h1>
      <Button onClick={handleOpenModal}>Open Modal</Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Bootstrap Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a Bootstrap Modal component.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default About;
