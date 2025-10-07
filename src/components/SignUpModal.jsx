import React, { useState } from 'react';
import Modal from './Modal';
import SignUpForm from './SingUpForm';

const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <SignUpForm />
    </Modal>
  );
};

export default SignUpModal;
