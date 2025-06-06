import { useState } from 'react';
import { episodeList } from './data.js';

const App = () => {
  const [episodeObj, setEpisodeObj] = useState(episodeList[0]);
  return (
    <>
      <h2>Dark Echoes</h2>
      <p>Episodes</p>
      <section>
        <ul>
          {episodeList.map((obj) => <li key={obj.id} onClick={() => setEpisodeObj({ ...obj })}> {obj.title}</li>)}
        </ul >
        <ol>
          <h2>Select an Episode</h2>
          <li>Episode {episodeObj.id}</li>
          <li>{episodeObj.title}</li>
          <li>{episodeObj.description}</li>
          <button>Watch Now</button>
        </ol>
      </section>
    </>
  )
}

export default App;