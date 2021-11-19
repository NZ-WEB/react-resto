import React from 'react';

const Error = ({message, name}) => {
    return (
      <div className="error">
          <span>{name}</span> <h2>{message}</h2>
      </div>
    )

}

export default Error;
