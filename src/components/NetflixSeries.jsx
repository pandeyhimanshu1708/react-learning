import seriesData from "../api/sereiesData.json";
export const NetflixSeries = () => {
  const Name = "Himanshu Pandey";
  const rating = "8.5";
  const age = "18";
  return (
    <ul>
    
    <li>
  
      <div>
        <img
          src="{seriesData[0].img_url}"
          alt="movie"
          width="80%"
          height="100%"
        />
      </div>
      <h2>Name: {seriesData[0].name} </h2>
      <h3>Rating:{seriesData[0].rating}</h3>
      <p>summary: {seriesData[0].description} </p>
      <p>Cast: {seriesData[0].cast}</p>
      <p>genre:{seriesData[0].genre}</p>
      <a href={seriesData[0].watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
    </ul>
  );
};

// export default NetflixSeries;

// export const footer = () => {
//   return <p>copyright@knobly.com</p>;
// };
