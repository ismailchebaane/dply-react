import React, { useState, useEffect } from 'react';
import axios from 'axios';
const App = () => {
  const [data, setData] = useState("");
  const [error, seterr] = useState(null);
  useEffect(() => {
    axios.get('https://crazy-flannel-nightgown-bee.cyclic.app/api/data')
    .then(response => {
     
      console.log(response.data); setData(response.data.data);
    })
    .catch(error => {
      seterr(error);
    });
  }, []);

  return (
 
     <div>
      {error?<h1>{error}</h1>:data ? <h1>{data}</h1> : <h1>Loading...</h1>}
    </div>
  );
};

export default App;
