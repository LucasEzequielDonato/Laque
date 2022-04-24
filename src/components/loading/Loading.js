import React from 'react';
import './Loading.css';

function Loading({children}) {
    return (
        <div className="loading-container">
            <h2>{children}</h2>
        </div>
    );
}
  
export default Loading;