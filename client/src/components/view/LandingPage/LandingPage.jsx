import React, { useEffect } from 'react';
import axios from 'axios';

const LandingPage = () => {
  useEffect(() => {
    axios
      .get('api/hello') // get 신호를 보냄
      .then((response) => console.log(response.data)) // 데이터가 있다면 console에 data를 찍고
      .catch((err) => console.log(err)); // 없다면 에러를 찍음
  }, []);
  return <div>LandingPage</div>;
};

export default LandingPage;
