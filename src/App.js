import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
const URL = process.env.REACT_APP_API_URL;





function App() {
useEffect(()=> {
  axios.get(`${URL}users`, {
    headers: {
      'Content-type': 'application/json'
    }
  }).then((res)=> console.log(res, 'response'))
}, [])
  return (
    <div className="App">
    <h2>Axios Interceptor</h2>
    </div>
  );
}

export default App;
