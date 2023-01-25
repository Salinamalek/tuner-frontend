import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function PlaylistEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [playlist, setPlaylist] = useState({
    title: "",
  });

  const updatePlaylist = (updatedPlaylist) => {
    axios
      .put(`${API}/playlist/${id}`, updatedPlaylist)
      .then(
        () => {
          navigate(`/playlist/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id]: event.target.value });
  };

  //   const handleCheckboxChange = () => {
  //     setSong({ ...playlist, is_favorite: !song.is_favorite });
  //   };

  useEffect(() => {
    axios.get(`${API}/playlist/${id}`).then(
      (response) => setPlaylist(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePlaylist(playlist, id);
  };
  return (
    <div className="Edit">
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
          //   pattern="http[s]*://.+"
          //   required
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

export default PlaylistEditForm;
