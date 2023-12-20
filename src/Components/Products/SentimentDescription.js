import React from 'react';

const SentimentDescription = ({ sentiment }) => {

  console.log("sentiment",sentiment)

  // Check if sentiment is defined and is an object
  if (!sentiment || typeof sentiment !== 'object') {
    return null; // or handle it in some way appropriate for your use case
  }

  return (
    <div className="sentiment-description">
      {Object.entries(sentiment).map(([level, percentage]) => (
        <div key={level} className="row mt-2 align-items-center">
          <div className="col-6">
            {[...Array(parseInt(level))].map((_, i) => (
              <i key={i} className="bi bi-star-fill text-purple"></i>
            ))}
          </div>
          <div className="col-5">
            <div className="progress">
              <div
                className="progress-bar bg-purple"
                style={{ width: percentage }}
              >
                <span className="visually-hidden">{percentage}</span>
                
              </div>
              <p className='text-black'>{percentage}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SentimentDescription;
