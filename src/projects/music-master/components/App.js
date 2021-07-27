import '../App.css';
import React from 'react';
import Artist from '../components/Artist';
import Tracks from '../components/Tracks';
import Search from './Search';


const API_BASE_URL = 'https://spotify-api-wrapper.appspot.com';

class App extends React.Component {

    state = {
      artist: null,
      tracks: []
    };

    componentDidMount(){
      this.searchArtist('pitbull'); //loading music master by deafault with my fav artist
    }

    searchArtist = (artistQuery) => {
      fetch(`${API_BASE_URL}/artist/${artistQuery}`)
        .then(response => response.json())
        .then(json => {
          if (json.artists.total > 0) {
            const artist = json.artists.items[0];
            this.setState({
              artist: artist
            });

            fetch(`${API_BASE_URL}/artist/${artist.id}/top-tracks`)
              .then(response => response.json())
              .then(json => {
                const tracks = json.tracks;
                this.setState({
                  tracks: tracks
                })
              }).catch(error => {
                alert(error.message);
              });
          }
        }).catch(error => {
          alert(error.message);
        });
    }


  render(){
  return (
    <div>
      <h2> Music Master </h2>
      <Search searchArtist={this.searchArtist}/>
      <hr/>
      <Artist artist={this.state.artist}/>
      <hr/>
      <Tracks tracks={this.state.tracks}/>
    </div>
  );
}
}

export default App;
