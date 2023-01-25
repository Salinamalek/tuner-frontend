import { Link } from "react-router-dom";

function Playlist({ playlist }) {
  return (
    <tr>
      <td>
        {/* {playlist.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )} */}
      </td>
      <td>
        <p>{playlist.title}</p>
      </td>
      <td>
        <Link to={`/playlist/${playlist.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Playlist;
