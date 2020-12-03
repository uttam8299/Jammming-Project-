import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component{
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }
    render(){
        return (
            <div clasName="Playlist">
             <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
             <TrackList tracks={this.props.playlistTracks} onRemove = {this.props.onRemove} isRemoval = {true}
              />
            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
</div>
        ); 
    }
}

export default Playlist;