import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Timeline from './Components/Timeline';
import Post from './Components/Post'
import { useState } from 'react';

function App() {
  const [postmode, setPostmode] = useState<boolean>(false)
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
