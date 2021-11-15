import axios from "axios";
import DefaultErrorPage from "next/error";
import ReactPlayer from "react-player";
import Screenshots from "../../components/games/Screenshots";
import TwoColumnLists from "../../components/games/TwoColumnLists";

const GameDetails = ({ data }) => {
  if (!data) {
    return <DefaultErrorPage statusCode={404} />;
  }
  return (
    <div className="container">
      <h1 className="text-white">{data.title}</h1>
      <div className="row">
        <ReactPlayer
          url={data["video_src"]}
          muted={true}
          playing={true}
          loop={true}
        />
      </div>
      <div className="row">
        <Screenshots img_srcs={data["screenshots"]} />
      </div>
      <div className="row text-white">{data["short_description"]}</div>
      <div className="row">
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
      <div className="row text-white">
        {data["description"].split(/\r\n\r\n/).map((paragarph, i) => {
          return <p key={i}>{paragarph}</p>;
        })}
      </div>
      <div className="row">
        <TwoColumnLists list={data["system_requirements"]} />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  let data = null;

  // Fetch data from python server API to scrape details
  try {
    const res = await axios.get(`http://localhost:3001/${id}`);
    data = res["data"];
  } catch (err) {
    console.error(err.message);
  }

  return { props: { data } };
}

export default GameDetails;
