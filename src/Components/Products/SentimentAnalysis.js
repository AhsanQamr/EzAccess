// Example code in your React component

import React, { useState } from 'react';
import axios from 'axios';

const SentimentAnalysis = () => {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const analyzeSentiment = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/sentiment', { text });
      const sentimentResult = response.data.sentiment;
      setSentiment(sentimentResult);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <textarea rows="4" cols="50" value={text} onChange={handleTextChange}></textarea>
      <button onClick={analyzeSentiment}>Analyze Sentiment</button>
      {sentiment && <div>Sentiment: {sentiment.label}</div>}
    </div>
  );
};

export default SentimentAnalysis;
