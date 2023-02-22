import { useState } from 'react';

function usePostData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (postData) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [postData, data, isLoading, error];
}

export default usePostData;
