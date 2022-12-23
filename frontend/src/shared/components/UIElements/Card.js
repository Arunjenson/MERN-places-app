import React from 'react';

import './Card.css';
import '../../../user/components/Useritem.css'

const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
