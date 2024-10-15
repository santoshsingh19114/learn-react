
import { useDispatch,useSelector } from 'react-redux';
import './App.css'
import { increment,decrement ,reset, incrementByAmount} from './features/counter/counterSlice';

import { useState } from 'react';


function App() {

  const [amount,setAmount] =useState(0);


  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  function handleincrementamount(){
    dispatch(incrementByAmount(amount));
  }


  function handleIncrementClick(){
    // console.log('Increment button clicked');
    dispatch(increment()); 
  }


  function handleDecrementClick(){
    // console.log('Decrement button clicked');
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }
  

  return (
    <div>
      <p>
     <h1> Redux Toolkit includes these APIs:</h1>
     <br/>

configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.
<br/>
createReducer(): that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.
<br/>
createAction(): generates an action creator function for the given action type string.
<br/>
createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
<br/>
combineSlices(): combines multiple slices into a single reducer, and allows "lazy loading" of slices after initialisation.
<br/>
createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise
<br/>
createEntityAdapter: generates a set of reusable reducers and selectors to manage normalized data in the store
The createSelector utility from the Reselect library, re-exported for ease of use.
      </p>

<hr/>


      <div className='container'>
        <button onClick={handleIncrementClick}>Increment</button>
        <p>Count:{count}</p>
        <button onClick={handleDecrementClick}>Decrement</button>
        <p>to reset</p>
        <button onClick={handleResetClick}>reset</button>
        <br/>
        <br/>

        <input type='number' value={amount} placeholder='enter amount' onChange={(e)=>setAmount(e.target.value)}></input>
        <br/>
        <br/>


        <button onClick={handleincrementamount}>incrementByAmount</button>
      </div>
    </div>
  )
}

export default App
