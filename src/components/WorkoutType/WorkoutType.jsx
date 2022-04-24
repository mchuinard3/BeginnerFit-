import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button, Container, Row, Col } from 'react-bootstrap';

function WorkoutType() {

  const [value, setDate] = useState('');
  const history = useHistory();

  const [weightOne, setWeightOne] = useState(0);
  const [weightTwo, setWeightTwo] = useState(0);
  const [weightThree, setWeightThree] = useState(0);
  const [weightFour, setWeightFour] = useState(0);

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'GET_WORKOUT' });
  }, []);

  const singleWorkout = useSelector(store => store.singleWorkoutReducer);

  const dispatch = useDispatch();

  const addWorkout = (event) => {
    event.preventDefault();
    dispatch({
      type: 'POST_WEIGHT_HISTORY',
      payload: {
        date: value,
        weight_used_1: weightOne,
        weight_used_2: weightTwo,
        weight_used_3: weightThree,
        weight_used_4: weightFour,
        exercise_1: singleWorkout.exercise_1,
        exercise_2: singleWorkout.exercise_2,
        exercise_3: singleWorkout.exercise_3,
        exercise_4: singleWorkout.exercise_4,
        user_id: user.id
      }
    })
    history.push(`/workoutHistory`)
    swal(`Way to get it done ${user.username}, check out your workout history!`);

  }

  return (
    <main className="center">
     <Col style={{ fontSize: 40 }}> {singleWorkout.workout_name}</Col>
      <div>
        <h4>___________________________________________</h4>
      </div>
      <div>
      <Col style={{ fontSize: 25 }}>Exercise 1: </Col>
      <Col style={{ fontSize: 25, padding: 4 }}>{singleWorkout.exercise_1}</Col>
        <div className="video">
          <ReactPlayer url={singleWorkout.video_1} />
        </div>
        <Col style={{ fontSize: 25, padding: 4 }}> Complete 4 Sets of 10 Reps </Col>
        <Col style={{ fontSize: 25 }}>Sets Completed:
          <input type="checkbox" className="border rounded" style={{ width: 14, height: 14 }} />
          <input type="checkbox" className="border rounded" style={{ width: 14, height: 14 }} />
          <input type="checkbox" className="border rounded" style={{ width: 14, height: 14 }} />
          <input type="checkbox" className="border rounded" style={{ width: 14, height: 14 }} />
          </Col>
          <Col style={{ fontSize: 25 }}>Weight Used:
          <input type="text" className="border rounded" size="7" style={{ padding: 10, margin: 5, height: 25, width: 120 }} onChange={(event) => setWeightOne(event.target.value)} />
          </Col>
        <div>
          <h4>___________________________________________</h4>
        </div>
      </div>

      <div>
        <h3>Exercise 2: </h3>
        <h3>{singleWorkout.exercise_2}</h3>
        <div className="video"><ReactPlayer url={singleWorkout.video_2} />
        </div>
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed:
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightTwo(event.target.value)} /> </h3>
        <div>
          <h4>___________________________________________</h4>
        </div>
      </div>

      <div>
        <h3>Exercise 3: </h3>
        <h3>{singleWorkout.exercise_3}</h3>
        <div className="video">
          <ReactPlayer url={singleWorkout.video_3} />
        </div>
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed:
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightThree(event.target.value)} /> </h3>
        <div>
          <h4>___________________________________________</h4>
        </div>
      </div>

      <div> <h3>Exercise 4: </h3>
        <h3>{singleWorkout.exercise_4}</h3>
        <div className="video">
          <ReactPlayer url={singleWorkout.video_4} />
        </div>
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed:
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightFour(event.target.value)} /> </h3>
        <div>
          <h4>___________________________________________</h4>
        </div>
      </div>
      <h3>Enter Workout Date:</h3>
      <div>
        <input type="date" onChange={(event) => setDate(event.target.value)} />
      </div>

      <h3>Click I'm Done Button When Entire Workout is Complete:</h3>
      <button onClick={addWorkout}>I'm Done</button>
    </main>
  )
}

export default WorkoutType;



