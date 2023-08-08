import React from 'react';
import Login from './Login';
import useToken from '../App/useToken';

const Dashboard = props => {
  const { token, settoken } = useToken();
  if (!token) {
    return <Login onLoginSuccess={props.onLoginSuccess} settoken={settoken} />;
  }
  return (
    <div>
      <Login onLoginSuccess={props.onLoginSuccess} settoken={settoken} />
    </div>
  );
};

export default Dashboard;
