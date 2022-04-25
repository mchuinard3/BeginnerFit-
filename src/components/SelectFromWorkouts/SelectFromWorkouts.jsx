import { React, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button, Container, Row, Col } from 'react-bootstrap';




function SelectFromWorkouts() {

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'GET_WORKOUT' });
  }, []);

  const workout = useSelector(store => store.workoutReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleWorkout = (id) => {
    dispatch({ type: 'GET_SINGLE_WORKOUT', payload: id });
    history.push('/workoutType');

  }

  return (
    
    <div className="center">
     
      <Col style={{ fontSize: 25, padding: 4 }}>Welcome, {user.username}!</Col>
      <Col style={{ fontSize: 25, padding: 4 }}>Your ID is: {user.id}</Col>
      <Col style={{ fontSize: 25, padding: 4 }}>Select From Workouts</Col>
     
      <ul>
        {workout.map((exercise) => {
          return (
            <button onClick={(event) => handleWorkout(exercise.id)}>{exercise.workout_name}</button>);
        })}
      </ul>
      <LogOutButton className="btn" />
    </div>
  );
}

export default SelectFromWorkouts;
