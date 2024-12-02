import { useState } from 'react'
import './Timeline.css'

export default function Timeline({events}){
    const [activeIndex, setActiveIndex] = useState(0);


    const handleClick = (index) => {
        setActiveIndex(index);
      };

      return (
        <div className="timeline-container">
          <div className="timeline-line">
            <div
              className="timeline-progress"
              style={{ width: `${(activeIndex / (events.length - 1)) * 100}%` }}
            ></div>
          </div>
          <div className="timeline-points">
            {events.map((event, index) => (
              <div
                key={index}
                className={`timeline-point ${index <= activeIndex ? 'active' : ''}`}
                onClick={() => handleClick(index)}
              >
                <div className="tooltip">{event}</div>
              </div>
            ))}
          </div>
        </div>
      );
    };
