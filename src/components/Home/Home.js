import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={props.onLogout} className="logout-button">
        Logout
      </button>
    </Card>
  );
};

export default Home;
