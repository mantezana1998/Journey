import MeasurementCard from "../MeasurementCard/MeasurementCard";

export default function CardsFeed (){

  return (
 
    <>
  <MeasurementCard/>  
      <div className="frequency">
        <h1>Frequency</h1>
        <p>"The event and rate recording method that counts the number of times a behavior happens within a specific time frame."</p>
      </div>
      <div className="duration">
        <h1>Duration</h1>
        <p>"The time length of how long a behavior last."</p>
      </div>
      <div className="latency">
        <h1>Latency</h1>
        <p>"Measuring the time that it takes for a behavior to occur after a verbal cue or an event"</p>
      </div>
      <div className="interval">
        <h1>Interval</h1>
        <p>"Measuring when a behavior occurs or doesn't occur during specified time frames."</p>
      </div>
    </>
  )
};