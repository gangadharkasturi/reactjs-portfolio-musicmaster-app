import React from 'react';

const TITLES = [
    "a software engineer",
    "a music lover",
    "a tech freak"
];

class Title extends React.Component{
    state = {titleIndex : 0, fadeIn:true};
  
    componentDidMount(){
       this.timeout = setTimeout(() => this.setState({fadeIn:false}),2000);
        this.animateTitles();
    }
    componentWillUnmount(){
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }
  
    animateTitles = () => {
        this.titleInterval = setInterval(()=> {
            const titleIndex = (this.state.titleIndex+1) % TITLES.length; //to reset the index to 0 once it is loop through everything
            this.setState({titleIndex:titleIndex, fadeIn:true});
            this.timeout = setTimeout(() => this.setState({
                fadeIn: false
            }), 2000);
        }, 4000);
        
    }

    render(){
        const {fadeIn, titleIndex} = this.state;
        const title = TITLES[titleIndex];
        return (
            <p className={fadeIn ? 'title-fade-in': 'title-fade-out'}>I am {title}</p>
        );
    }
}

export default Title;