import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

const LoadingCard = () => {
  return (
    <Card>
      <div className="card-container">
        <FontAwesomeIcon icon={faSpinner} className="card-icon card-icon-loading" />
        <div>
          <h1 className="card-title">Loading articles...</h1>
          <p className="card-description">Your articles are loading. Please wait</p>
        </div>
      </div>
    </Card>
  )
}

export default LoadingCard;