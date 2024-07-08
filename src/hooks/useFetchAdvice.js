import { useState, useEffect } from 'react';

const useFetchAdvice = () => {
  const [advice, setAdvice] = useState(null); 
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

  const fetchAdvice = async () => {
    setIsLoading(true); 
    try {
      const randomNumber = Math.floor(Math.random() * 224);
      const apiURL = `https://api.adviceslip.com/advice/${randomNumber}`;
      const response = await fetch(apiURL);

      if (!response.ok) {
        throw new Error(`Error fetching advice: ${response.statusText}`);
      }

      const data = await response.json();

      if (data && data.slip && data.slip.advice) {
        setAdvice(data.slip);
      } else {
        setError('Error fetching advice: Invalid response structure');
      }
    } catch (error) {
      console.error('Error fetching advice:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []); 

  return { advice, error, isLoading, fetchAdvice };
};

export default useFetchAdvice;
