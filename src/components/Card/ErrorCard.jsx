import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

const ErrorCard = () => {
  return (
    <Card>
      <div className="card-container">
        <FontAwesomeIcon icon={faCircleExclamation} className="card-icon card-icon-error" />
        <div>
          <h1 className="card-title">Error while fetching articles...</h1>
          <p className="card-description">Something went wrong. Pleasy try later</p>
        </div>
      </div>
    </Card>
  )
}

export default ErrorCard;