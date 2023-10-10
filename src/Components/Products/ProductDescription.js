import React from 'react';

function ProductDescription({ descriptionData }) {
  // Convert descriptionData to an array if it's not already
  descriptionData = Array.isArray(descriptionData) ? descriptionData : [];

  if (descriptionData.length === 0) {
    return (
      <div className="border rounded p-3 mt-4">
        <h4 className="mb-0"><strong>No Features Mentioned</strong></h4>
      </div>
    );
  }

  // Check if "General Features" is present; if not, add it
  if (!descriptionData.some(item => item.startsWith("General Features"))) {
    descriptionData.unshift("General Features ");
  }

  let isGeneralFeatures = false;

  return (
    <div className="border rounded p-3 mt-4">
      {descriptionData.map((item, index) => {
        if (typeof item === 'string') {
          if (item.startsWith("General Features")) {
            isGeneralFeatures = true;
            return (
              <div key={index}>
                <h4 className="mb-0"><strong>{item}</strong></h4>
              </div>
            );
          } else {
            return (
              <ul key={index} className="mb-0">
                {isGeneralFeatures ? <li>{item}</li> : <li>{item}</li>}
              </ul>
            );
          }
        } else {
          return null; // Skip non-string items
        }
      })}
    </div>
  );
}



export default ProductDescription;


