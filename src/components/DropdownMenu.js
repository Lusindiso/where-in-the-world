import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownMenu = () => {
  return (
    <DropdownButton
      alignRight
      title='Dropdown right'
      id='dropdown-menu-align-right'
      btn-primary={{ color: 'red' }}
    >
      <Dropdown.Item eventKey='Africa' btn-primary={{ color: 'red' }}>
        Africa
      </Dropdown.Item>
      <Dropdown.Item eventKey='Americas'>Americas</Dropdown.Item>
      <Dropdown.Item eventKey='Asia'>Asia</Dropdown.Item>
      <Dropdown.Item eventKey='Europe'>Europe</Dropdown.Item>
      <Dropdown.Item eventKey='Oceania'>Oceania</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropdownMenu;
