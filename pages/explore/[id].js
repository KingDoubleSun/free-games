import axios from "axios";
import DefaultErrorPage from "next/error";
import { useState } from "react";
import ReactPlayer from "react-player";
import Screenshots from "../../components/games/Screenshots";
import TwoColumnLists from "../../components/games/TwoColumnLists";

const GameDetails = ({ data }) => {
  // redirect to 404 page if no data found
  if (!data) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // video status check
  const [hasError, setHasError] = useState(false);
  return (
    <div className="container sort-font">
      <h1 className="text-white text-center fw-bold">{data.title}</h1>
      {/* Player and Carousel */}
      <div className="row mt-5">
        <div className="col-6">
          {data["video_src"] ? (
            <ReactPlayer
              url={data["video_src"]}
              playing={true}
              light={hasError && data["thumbnail"]}
              muted={true}
              loop={true}
              width="100%"
              height="100%"
              controls={true}
              onError={() => {
                setHasError(true);
              }}
            />
          ) : (
            <img src={data["thumbnail"]} className="video-img p-1" />
          )}
        </div>
        <div className="col-6 py-1">
          <Screenshots img_srcs={data["screenshots"]} />
        </div>
      </div>
      {/* Short descriptions */}
      <h2 className="row text-white mt-5 mr-3">{data["short_description"]}</h2>
      <div className="row my-5 mr-2 fs-6">
        <TwoColumnLists
          list={{
            genre: data["genre"],
            "release date": data["release_date"],
            platform: data["platform"],
            publisher: data["publisher"],
            developer: data["developer"],
            status: data["status"],
          }}
        />
      </div>
      {/* Summary of the game*/}
      <div className="row text-white fs-6">
        <h1 className="pb-3 border-bottom border-secondary mb-3 fw-bold">
          Summary
        </h1>
        <div className="mr-2">
          {data["description"].split(/\r\n\r\n/).map((paragarph, i) => {
            return <p key={i}>{paragarph}</p>;
          })}
        </div>
      </div>
      {/* Minimum system requirements */}
      <div className="row my-5 text-white">
        <h1 className="pb-3 border-bottom border-secondary mb-4 fw-bold">
          Minimum System Requirements
        </h1>
        <div className="row mr-2 fs-6">
          {typeof data["system_requirements"] === "string" ? (
            data["system_requirements"]
          ) : (
            <TwoColumnLists list={data["system_requirements"]} />
          )}
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // Route to game details by id
  const { params } = context;
  const { id } = params;
  let data = null;

  // Fetch data from python server API to scrape more details
  try {
    const res = await axios.get(`http://localhost:3000/api/${id}`);
    data = res["data"];
  } catch (err) {
    console.error(err.message);
  }
  return { props: { data } };
}

export default GameDetails;
