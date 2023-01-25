import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Songs from "./Songs";

function PlaylistDetails() {
  const [playlist, setPlaylist] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/playlist/${id}`).then((response) => {
      setPlaylist(response.data);
    });
  }, [id, navigate, API]);

  const deletePlaylist = () => {
    axios
      .delete(`${API}/playlist/${id}`)
      .then(() => {
        navigate(`/playlist`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deletePlaylist();
  };
  return (
    <>
      <article>
        <h3>
          {/* {song.is_favorite ? <span>⭐️</span> : null}  */}
          {playlist.title}
        </h3>
        <h5>
          <span>
            <a>{playlist.title}</a>
          </span>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* {song.artist} */}
        </h5>
        {/* <h6>{song.time}</h6> */}
        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/playlist`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/playlist/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
      {/* <Reviews /> */}
      <Songs />
    </>
  );
}

export default PlaylistDetails;
