import React from 'react';
import Header from './Header';

const Joke = ({joke}) => {
     const {setup, punchline} = joke;
      return(
             <p style={{margin:20}}>{setup} <em>{punchline}</em></p>
        );
}


class Jokes extends React.Component{

    state = {joke : {}, jokes : []};

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({joke:json}))
        .catch(error => alert(error.message))
    }

    fetchJokes = () => {

        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes:json}))
        .catch(error => alert(error.message));
    }

    render(){
        const {jokes} = this.state.jokes;
        return(
            <div>
                <Joke joke={this.state.joke}/>
                <hr/>
                <h3> Want more ten jokes?</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {
                    this.state.jokes.map(joke => {
                        return (
                            <Joke key={joke.id} joke={joke}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default Jokes;