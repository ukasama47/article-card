/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const axios = require("axios");
const { JSDOM } = require("jsdom");

exports.fetchOgpInfo = functions.https.onRequest(async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const response = await axios.get(url);
    const dom = new JSDOM(response.data);
    const metaTags = dom.window.document.querySelectorAll("meta");

    const ogpInfo = {};
    metaTags.forEach((tag) => {
      if (
        tag.getAttribute("property") &&
        tag.getAttribute("property").startsWith("og:")
      ) {
        const property = tag.getAttribute("property").replace("og:", "");
        ogpInfo[property] = tag.getAttribute("content");
      }
    });

    res.json({ [url]: ogpInfo });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch OGP data" });
  }
});
