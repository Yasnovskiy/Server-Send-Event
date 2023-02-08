import React, { useEffect, useRef, useState } from 'react'

function Home() {
    const [ facts, setFacts ] = useState<{
        info: string;
        source: string;
      }[]>([]);
      const [ listening, setListening ] = useState(false);
    
      const [ companies, setCompanies ] = useState<string[]>([]);
      const [ color, setColor ] = useState<string[]>([]);
    
    
      const t = useRef(false);
      useEffect( () => {

        if (t.current) {
            return;
        }

        // const eventSource = new EventSource(`http://localhost:5555/streaming`);
    
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
    
    
    
        // const source = new EventSource('http://localhost:8080');
        const source = new EventSource('http://localhost:5555/streaming');
        const eventColor = new EventSource('http://localhost:5555/color');
    
          source.onmessage = function(event) {
            console.info(event);
          }
    
          source.addEventListener('test', function(event) {
            console.info('test', event.data);
    
            setCompanies((prev) => [...prev,`${event.data} - ${event.lastEventId}`])
            // setCompanies([`${event.data} - ${event.lastEventId}`])
          })
    

          eventColor.onmessage = function(event) {
            console.info(event);
          }
    
          eventColor.addEventListener('test', function(event) {
            console.info('test', event.data);
    
            setColor((prev) => [...prev,`${event.data} - ${event.lastEventId}`])
            // setCompanies([`${event.data} - ${event.lastEventId}`])
          })

          t.current = true;
      });
    
  return (
    <div className="container" style={{display: 'flex'}}>
        <div>
            <h2>color</h2>
          {color.map((item) => (<div key={item} className='color'>{item}</div>))}
        </div>
        <div>
            <h2>companies</h2>
            {companies.map((item) => (<div key={item}>{item}</div>))}
        </div>
    </div>
  )
}

export default Home;