import React from 'react'
import Profile from './components/profile/profile';
import Header from './components/header/header';

export function App2() {

  let data = null;
  const [username, setUsername] = React.useState('')
  const [userdata, setUserdata] = React.useState(null)
  
  
  //  console.log(data);

  async function fetchUser(event){
    event.preventDefault();
    const userData = await fetch(`https://api.github.com/users/${username}`);
    
    const userJson = await userData.json();
    setUserdata(userJson);
  }
  
  return (
    <div className='main-container'>
      <input type='text' value={username} onChange={(event)=>setUsername(event.target.value)} />
      <button onClick={fetchUser}>Fetch</button>
      <div>
        {userdata !== null ? Object.keys(userdata).map(key=>
        (<>
          <h3>{key}</h3>
          <p>{userdata[key]}</p>
        </>)) : null
        }
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className='main-container'>
        <div className='header-container'>
          <Header />
        </div>
        <div className='profile-container'>
          <Profile />
        </div>
    </div>
  )
}
