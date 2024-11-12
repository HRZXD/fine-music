// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/lyrics", async (req, res) => {
    const { searchTerm } = req.body;
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are an assistant that provides song lyrics." },
            { role: "user", content: `Provide the lyrics for the song: ${searchTerm}` },
          ],
          max_tokens: 200,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer API_KEY`,
          },
        }
      );
      res.json(response.data.choices[0].message.content);
    } catch (error) {
      console.error("Error in OpenAI request:", error.response?.data || error.message);
      res.status(500).json({ error: error.response?.data || "Error fetching lyrics" });
    }
  });
  

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
