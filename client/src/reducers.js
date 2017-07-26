import { combineReducers } from 'redux';


// import tracks from './tracks';
// import playlists from './playlists';
// import filterTracks from './filterTracks';


export default combineReducers({
    routing: routerReducer,
    tracks,
    playlists,
    filterTracks
});