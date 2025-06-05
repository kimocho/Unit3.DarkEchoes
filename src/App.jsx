import { episodeList } from './data.js';
import { useState } from 'react';

export default function App() {
  // TODO
  const [episodeList, setEpisodeList] = useState(episodeList);
  return (
    <>
      <ol>
        {episodeList.map(elem => {
          return (`<li>${elem.title}</li>`);
        }
        )}
      </ol>
    </>
  );
}
