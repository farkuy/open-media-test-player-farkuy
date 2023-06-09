import './Style/App.css';
import PlayerForm from "./Components/Form/PlayerForm";
import {useState} from "react";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";
import {useDispatch, useSelector} from "react-redux";

function App() {

    const dispatch = useDispatch();
    const visiblePlayerForm = useSelector(state => state.visibleForm.visible);
    const urlSong = useSelector(state => state.urlSong.urlSong)


    const [finishUrlSong, setFinishUrlSong] = useState(``)

  return (
    <div className="App">
        {
            visiblePlayerForm
            ?  <PlayerForm/>
            : <MusicPlayer finishUrlSong={finishUrlSong}/>
        }

    </div>
  );
}

export default App;
