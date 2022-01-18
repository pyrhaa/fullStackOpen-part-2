import React from 'react';

const Notification = ({ notif }) => {
  const notifStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  };

  if (notif === null) {
    return null;
  }

  return <div style={notifStyle}>{notif}</div>;
};

export default Notification;
