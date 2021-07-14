import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Timeline from './Components/Timeline';
import Post from './Components/Post'
import { useEffect, useState } from 'react';

function App() {
  const [postmode, setPostmode] = useState(false)
  useEffect(()=>{

  },[postmode])
  return (
    <div className="App">
      {postmode?
      <>
      <Profile/>
      <Header/>
      <Timeline/>
      <Post setPostmode={setPostmode}/>
      </>: 
      <Post setPostmode={setPostmode}/>
      }
    </div>
  );
}

export default App;
