const express = require("express");
const axios = require("axios");
const { spawn } = require("child_process");
const app = express();

app.get("/:game_id", async (req, res) => {
  const PYTHON_CODE = "get_game_data.py";
  const game_id = req.params.game_id;
  var options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
    params: { id: game_id },
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "5bf162546cmsh7125237bb311b0fp1c906fjsn76a33950d8fb",
    },
  };

  try {
    const response = await axios.request(options);
    const game_url = response["data"]["freetogame_profile_url"];
    const childPython = spawn("python", [PYTHON_CODE, game_url]);
    childPython.stdout.on("data", (data) => {
      const scraped_data = JSON.parse(`${data}`);
      res.send(JSON.stringify({ ...response["data"], ...scraped_data }));
    });

    childPython.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      res.sendStatus(500);
    });

    childPython.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
  } catch (err) {
    res.sendStatus(404);
  }
});

app.listen(3001);
