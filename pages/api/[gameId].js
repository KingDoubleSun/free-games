const axios = require("axios");
const { spawn } = require("child_process");

const handler = async (req, res) => {
  const PYTHON_CODE = "./pages/api/get_game_data.py";
  const game_id = req.query.gameId;
  var options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
    params: { id: game_id },
    headers: {
      "x-rapidapi-host": process.env.NEXT_PUBLIC_HOST_NAME,
      "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    const game_url = response["data"]["freetogame_profile_url"];
    const childPython = spawn("python", [PYTHON_CODE, game_url]);
    childPython.stdout.on("data", (data) => {
      const scraped_data = JSON.parse(`${data}`);
      return res.status(200).send({ ...response["data"], ...scraped_data });
    });

    childPython.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      res.status(500).json({ message: "internal server error" });
    });
  } catch (err) {
    res.status(404).json({ message: "page not found" });
  }
};

export default handler;
