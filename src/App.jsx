import { useState } from 'react';
import { episodeList } from './data.js';

const App = () => {
  const [episodeObj, setEpisodeObj] = useState(episodeList[0]);
  // onClick={setEpisodeObj({ ...obj })}
  return (
    <>
      <h2>Dark Echoes</h2>
      <p>Episodes</p>
      <section>
        <ul>
          {episodeList.map((obj) => <li key={obj.id}> {obj.title}</li>)}
        </ul >
        <ul>
          <li>Episode {episodeObj.id}</li>
          <li>{episodeObj.title}</li>
          <li>{episodeObj.description}</li>
          <button>Watch Now</button>
        </ul>
      </section>
    </>
  )
}

export default App;