import { useState, useEffect } from "react";
import axios from "axios";
import Playlist from "./Playlist";

const API = process.env.REACT_APP_API_URL;

function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  console.log(API);
  useEffect(() => {
    axios
      .get(`${API}/playlist`)
      .then((response) => {
        setPlaylists(response.data);
        console.log(response.data);
      })

      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="Playlists">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this playlist</th>
            </tr>
          </thead>
          <tbody>
            {playlists.map((playlist) => {
              return <Playlist key={playlist.id} playlist={playlist} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Playlists;
