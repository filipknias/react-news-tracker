import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

const EmptyResultsCard = () => {
  return (
    <Card>
      <div className="card-container">
        <FontAwesomeIcon icon={faSquarePollHorizontal} className="card-icon card-icon-results" />
        <div>
          <h1 className="card-title">No articles found...</h1>
          <p className="card-description">Your query do not match any articles</p>
        </div>
      </div>
    </Card>
  )
}

export default EmptyResultsCard;