import { React } from "react";
import { NetflixSeries } from "./components/NetflixSeries";
import { EventHandling } from "./components/EventHandling";
import { State } from "./hooks/State";
import ToggleSwitch from "./projects/ToggleSwitch/ToggleSwitch";


export const App = () => {
  // return [<NetflixSeries  key = "1"/>, <NetflixSeries key = "2" /> ];
  // return (
  //   <React.Fragment>
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //   </React.Fragment>
  // );
  return (
    // <div>
    //   <NetflixSeries></NetflixSeries>

    //   <NetflixSeries></NetflixSeries>
    //   <NetflixSeries></NetflixSeries>

    //   <NetflixSeries></NetflixSeries>
    //   <NetflixSeries></NetflixSeries>

    // </div>

    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}

      {/* <EventHandling></EventHandling>
      <State></State> */}
      { <ToggleSwitch></ToggleSwitch> }
    </>
  );
};
