import React, { useEffect } from 'react';
import axios from 'axios';

const LandingPage = (props) => {
  useEffect(() => {
    axios
      .get('api/hello') // get 신호를 보냄
      .then((response) => console.log(response.data)) // 데이터가 있다면 console에 data를 찍고
      .catch((err) => console.log(err)); // 없다면 에러를 찍음
  }, []);

  const onClickHandler = () => {
    axios.get('/api/users/logout').then((response) => {
      if (response.data.success) {
        props.history.push('/login');
        alert('로그아웃 성공');
      } else {
        alert('로그아웃 실패');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h2>시작 페이지</h2>

      <button onClick={onClickHandler}>Logout</button>
    </div>
  );
};

export default LandingPage;
