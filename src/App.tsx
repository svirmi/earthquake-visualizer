import { features } from 'process';
import React, { useEffect } from 'react';
import { mergeMap } from 'rxjs/operators';
import './App.css';

import { rawEarthQuake$ } from './store';

function App() {

  useEffect(() => {
    rawEarthQuake$
      .subscribe(console.log)
  }, []);

  return (
    <div>
    </div>
  );
}

export default App;
