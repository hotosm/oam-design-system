'use strict';
import React from 'react';
import { render } from 'react-dom';
import OAM from '../../../assets/scripts/index';
var { Modal, ModalHeader, ModalBody, ModalFooter } = OAM.Modal;

OAM.hello();

var renderModal = function () {
  var container = document.querySelector('[data-hook="modal"]');
  if (container === null) return;

  var el = React.createElement('div', null,
    <Modal
      id='test-modal'
      revealed >

      <ModalHeader>
        <h3>Test Modal</h3>
      </ModalHeader>
      <ModalBody>
        <p>This modal is currently under development.</p>
        <p>It will be ready some time in the next century... maybe.</p>
      </ModalBody>
      <ModalFooter>
        oam-desing-system
      </ModalFooter>
    </Modal>
  );

  render(el, container);
};

renderModal();
