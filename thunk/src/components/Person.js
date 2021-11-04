
   
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import axios from 'axios';

import { fetchStart, fetchSuccess, fetchError } from './../actions';

const Person = ({ person, isFetching, error, dispatch }) => {

  useEffect(()=> {
    console.log("useEffect")
    dispatch(fetchStart());
    axios.get('https://randomuser.me/api/')
      .then(resp=> {
        dispatch(fetchSuccess(resp.data.results[0]));
      })
      .catch(err => {
        dispatch(fetchError(err));
      });
  }, []);


  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }
  // put here hava ERROR
  // useEffect(()=> {
  //   console.log("useEffect")
  //   dispatch(fetchStart());
  //   axios.get('https://randomuser.me/api/')
  //     .then(resp=> {
  //       dispatch(fetchSuccess(resp.data.results[0]));
  //     })
  //     .catch(err => {
  //       dispatch(fetchError(err));
  //     });
  // }, []);

  const handleClick = () => {
    dispatch(fetchStart());
    axios.get('https://randomuser.me/api/')
    .then(resp=> {
      //console.log(resp)
      //dispatch(fetchSuccess(resp.data.results[0]));  
      dispatch(fetchError("jjdjjjdfnj"));
    })
    .catch(err => {
      dispatch(fetchError(err));
    });
    // dispatch(fetchError("this causes an eror now"));

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