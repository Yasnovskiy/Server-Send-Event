import { useEffect, useRef, useState } from "react";

function HandlerSendEvent() {
  const [isStarting, setIsStarting] = useState(false);
  const [data, setData] = useState<string[]>(['test']);
  const t = useRef(false);


  useEffect(() => {

    const events = new EventSource('http://localhost:5555/streaming');

      // events.onopen = function(event) {
      //   console.info(event);
      // }
 
      events.onmessage = function(event) {
        console.info(event);
      }

      events.addEventListener('message', e => {
        if (e.lastEventId === '-1') {
            // закрываем соединение
            events.close()
            // сообщаем об этом
            // this.eventLog.textContent = 'End of stream from the server.'
        }
        // мы можем получить такой идентификатор лишь раз
    })


    if (!isStarting) {
      events.close()
    }


      // if (isStarting) {
      //   // events.close();
      //   events.onopen = function(event) {
      //     console.info(event);
      //   }
      // } else {
      //   events.close();
      //   console.log('close');
      // }

  }, [isStarting]);

  return (
    <div>
      <div>
        <button type="button" onClick={() => setIsStarting(true)}>Start</button>
        <button type="button" onClick={() => setIsStarting(false)}>Stop</button>

        {data.map((item) => (<div key={item}>{item}</div>))}

      </div>

    </div>
  )
};

export default HandlerSendEvent;