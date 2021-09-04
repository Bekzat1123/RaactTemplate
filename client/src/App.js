import React, {useEffect, useState} from 'react'
import axios from "axios";

function App() {
    const [test, setTest] = useState('wait')

    useEffect(() => {
        axios('/api/v1/test')
            .then(({data}) => setTest(data))
            .catch(e => setTest(JSON.stringify(e.response)))
    },[])
  return (
    <div className='bg-red-500'>
      <h1>Hello</h1>
        <h2>{test}</h2>
    </div>
  );
}

export default App;
