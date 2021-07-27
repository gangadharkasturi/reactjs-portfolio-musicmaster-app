import React, {Component} from 'react';
import PROJECTS from '../data/projects'


class Project extends React.Component{
    render(){
        const {title, description, link, image} = this.props.project;
        return (
            <div style={{display:'inline-block', margin:10, width:300}}>
                <h1>{title}</h1>
                <img src={image} alt="image" style={{width:200, height:120}}/>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        );
    }
}


class Projects extends React.Component{
    render(){
        return (
        <div>
            <h3>Hightlighed Projects</h3>
            {
                PROJECTS.map(PROJECT => {
                    return (
                        <Project key={PROJECT.id} project={PROJECT}/>
                    );
                })
            }
        </div>
        );
    }
}

export default Projects;