import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function PlaylistNewForm({ id }) {
  let navigate = useNavigate();

  const addPlaylist = (newPlaylist) => {
    axios
      .post(`${API}/playlist`, newPlaylist)
      .then(
        () => {
          navigate(`/playlist`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [playlist, setPlaylist] = useState({
    title: "",
  });

  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id]: event.target.value });
  };

  //   const handleCheckboxChange = () => {
  //     setSong({ ...song, is_favorite: !song.is_favorite });
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlaylist(playlist);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={playlist.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Playlist"
          required
        />
        {/* <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          value={song.artist}
          placeholder="Name of Artist"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Album Title"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        /> */}

        <br />

        <input type="submit" />
      </form>
      <Link to={`/playlist/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default PlaylistNewForm;
