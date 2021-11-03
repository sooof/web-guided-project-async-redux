import React from 'react';
import { connect } from 'react-redux';

import { fetchStart, fetchSuccess } from './../actions';

import axios from 'axios';

const Person = ({ person, isFetching, error, dispatch }) => {

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }

  const handleClick = () => {
    dispatch(fetchStart());
    axios.get()
    //0. connect our actions to this component
    //1. make a api call to https://randomuser.me/api/
    //2. if call is successful: dispatch fetchSuccess passing in our person
    //3. if call is not successful: dispatch fetchError passing in error message
  }

  return (
    <>
      <div>
        <h2>Say Hi to: {person.name.first} {person.name.last}</h2>
        <img src={person.picture.large}/>
      </div>
      <button onClick={handleClick}>Get new person</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(Person);