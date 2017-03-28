import React { Component } from 'react';
import Songs from '../components/Songs';

class Album extends Component {

    constructor(props){
      super(props);
      this.state = {};

    }
      // const album = this.props.album;
      // const currentSong = this.props.currentSong;
      // const isPlaying = this.props.isPlaying;
      // const toggleOne = this.props.toggleOne;
      //
    render() {
        return (
            <div className="album">
                <div>
                    <h3>{ album.name }</h3>
                      <img src={ album.imageUrl } className="img-thumbnail"/>
                  </div>
                  <Songs
                      songs={album.songs}
                      currentSong={currentSong}
                      isPlaying={isPlaying}
                      toggleOne={toggleOne}/>
              </div>
          );
      }
}

export default Album;
