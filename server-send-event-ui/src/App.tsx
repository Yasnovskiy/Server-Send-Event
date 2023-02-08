import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HandlerSendEvent from './components/HandlerSendEvent/HandlerSendEvent';
import Home from './pages/Home/Home';

function App() {
  const [ facts, setFacts ] = useState<{
    info: string;
    source: string;
  }[]>([]);
  const [ listening, setListening ] = useState(false);

  const [ companies, setCompanies ] = useState<string[]>([]);


  const t = useRef(false);
  useEffect( () => {
    // const eventSource = new EventSource(`http://localhost:8000/event`);

    // eventSource.onopen = e => {
    //   console.log(e);
    // }

    // eventSource.onmessage = e => {
    //   console.log('onmessage');
    //   console.log('data ', e.data);
    //   setListening(e.data)
    // }

    // eventSource.addEventListener('ping', e => {
    //   console.log(e);
    // });
    

    // const eventSource = new EventSource('http://localhost:8000/event')

    // eventSource.onmessage = function (event) {
    //   setListening(event.data)
    // }
    
    // eventSource.onerror = function () {
    //   console.log('Server closed connection')
    //   eventSource.close()
    // } 

    // eventSource.addEventListener("message", function(e) {
    //   try{
    //     console.log('data', e.data)
    //     const companies = JSON.parse(e.data)
    //     // @ts-ignore
    //     for(companyId in companies){
    //         // @ts-ignore
    //       console.log(`#${companyId}`)
    //         // @ts-ignore
    //       document.querySelector(`#${companyId} .subscribers`).innerHTML = companies[companyId].subscribers
    //     }
    //   }catch{

    //   }
    // }

    // eventSource.addEventListener('message', (e) => {
    //   try{
    //     console.log('data', e.data)
    //     const companies = JSON.parse(e.data)
    //     // @ts-ignore
    //     setCompanies(e.data);
    //   }catch{
    //     console.log('error');
    //   }
    // });


    if (t.current) {
      return;
    }
    // const source = new EventSource('http://localhost:8080');
    // const source = new EventSource('http://localhost:5555/streaming');

      // source.onmessage = function(event) {
      //   console.info(event);
      // }

      // source.addEventListener('test', function(event) {
      //   console.info('test', event.data);

      //   setCompanies((prev) => [...prev,`${event.data} - ${event.lastEventId}`])
      // })

      t.current = true;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;