import React, {Component} from 'react';

class Tracks extends Component{

    state = {isAudioPlaying:false, audio: null, playingPreviewUrl: null};

    playAudio = (previewUrl) =>  {
       const audio = new Audio(previewUrl);
       if(!this.state.isAudioPlaying){
        audio.play();
        this.setState({isAudioPlaying:true, audio:audio, playingPreviewUrl:previewUrl});
       }else {
            this.state.audio.pause();
            if(this.state.playingPreviewUrl === previewUrl){
                this.setState({isAudioPlaying:false});
            }else {
                audio.play();
                this.setState({audio, playingPreviewUrl:previewUrl})
            }
           
       }

    }

    trackIcon = (track) => {

    if(!track.preview_url){
        return <span>N/A</span>
    }

    if(this.state.isAudioPlaying && this.state.playingPreviewUrl===track.preview_url){
        return <span>| |</span>
    }else {
        return <span>&#9654;</span>
        }
    }

    render(){

        const {tracks} = this.props;
        return(
            <div>
                {
                    tracks.map(track => {
                        const {name, id, album, preview_url} = track;
                        return (<div key={id} className='track'>
                            <img src={album.images[0] && album.images[0].url} alt="track-image" className='track-image'/>
                            <p className='track-text'>{name}</p>
                            <p className='track-icon'  onClick={() => this.playAudio(preview_url)}>{this.trackIcon(track)}</p>
                        </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Tracks;