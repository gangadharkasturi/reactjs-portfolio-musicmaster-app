import React from 'react';

const Artist = ({artist}) => {

    if (!artist) {
        return null
    };
    const {name,followers,genres,images} = artist;
    return(
        <div>
          <h3>{name}</h3>
          <p>{followers.total} followers</p>  
          <p>{genres.join(',')}</p>
          <img src={images[0] && images[0].url} alt="aritst-image" style={{height:200, width:200, borderRadius:100}} />
        </div>
    );
}


export default Artist;