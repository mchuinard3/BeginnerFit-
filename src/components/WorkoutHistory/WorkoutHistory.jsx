import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'; import EditWorkout from '../EditWorkout/EditWorkout';

function WorkoutHistory({ }) {

  const workoutHistory = useSelector(store => store.workoutHistoryReducer);
  console.log(workoutHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_WORKOUT_HISTORY' });
  }, []);

  // useEffect(() => {
  //   dispatch({ type: 'GET_WORKOUT' });
  // }, []);

  return (

    <section className="container">

      <main>{workoutHistory.map(lift => (
        <EditWorkout lift={lift} />
      ))}
      </main>
    </section>
  );
}
export default WorkoutHistory;
