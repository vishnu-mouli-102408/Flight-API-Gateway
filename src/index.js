const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const axios = require("axios");

const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const rateLimit = require("express-rate-limit");

const setUpAndStartServer = async () => {
  const app = express();

  const limiter = rateLimit({
    window: 2 * 60 * 1000,
    max: 5,
  });

  app.use(morgan("combined"));
  app.use(limiter);

  app.use("/bookingservice", async (req, res, next) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/v1/isAuthenticated",
        {
          headers: {
            "x-access-token": req.headers["x-access-token"],
          },
        }
      );
      if (response.data.success) {
        next();
      } else {
        return res.status(401).json({
          message: "Unauthorized",
        });
      }
    } catch (error) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  });

  app.use(
    "/bookingservice",
    createProxyMiddleware({
      target: "http://localhost:3002",
      changeOrigin: true,
    })
  );
  app.get("/home", (req, res) => {
    return res.json({
      message: "OK",
    });
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server Started on Port: ${PORT}`);
  });
};

setUpAndStartServer();
