import logo from '../logo.svg';
import '../App.css';
import Project from './Projects';
import SocialProfile from './SocialProfile';
import profilePic from '../assets/profile.png';
import React from 'react';
import Title from './Title';

class App extends React.Component {

   state = {
     displayBio: false
   };

   toggleDisplayBio = () => {
     this.setState({
       displayBio: !this.state.displayBio
     });
   }

  render(){
  return (
    <div>
       <img src={profilePic} alt='profile' className='profile' />
        <h1>Hello!</h1>
        <p>My name is Gangadhar...</p>
        <Title/>
        <p>I'm always looking forward to working on meaningful projects.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Hyderabad, and code every day.</p>
              <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
              <p>Besides coding, I also love music!</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
        <hr />
     <Project/>
     <hr/>
     <SocialProfile/>
    </div>
  );
}
}

export default App;
