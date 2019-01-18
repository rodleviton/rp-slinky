
import html2canvas from "html2canvas";
import fireworks from "./fireworks";
import "../css/style.dev.css";

/***************************************************************************
 * VARIABLES
 ***************************************************************************/
const ESC_KEY_CODE = 27;
const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalOpenButton = document.getElementById("modalOpenButton");
const modalCloseButton = document.getElementById("modalCloseButton");
const pixels = document.getElementById("pixelsContainer");
const downloadButton = document.getElementById("downloadButton");
const canvas = document.getElementById("canvasContainer");
const imageDownloadFilename = "screenshot.jpg";
const width = 340;
const height = 460;

// Sound effects
const shutter = new Audio(require("../sounds/shutter.wav"));

/***************************************************************************
 * EVENT HANDLERS
 ***************************************************************************/
fireworks.init();

function createScreenshot() {
  html2canvas(pixels, { canvas, width, height, scale: 1 });
}

function downloadCanvas(link, canvasEl, filename) {
  link.href = canvasEl.toDataURL('image/jpeg', 0.85);
  link.download = filename;
}

function openModal() {
  // play sound effect
  shutter.play();

  // generate new screenshot
  createScreenshot();

  document.body.classList.add("rp-open");

  fireworks.fire();
}

function closeModal() {
  document.body.classList.remove("rp-open");

  // clear the canvas
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}

/***************************************************************************
 * EVENT LISTENERS
 ***************************************************************************/

downloadButton.addEventListener(
  "click",
  () => downloadCanvas(downloadButton, canvas, imageDownloadFilename),
  false
);

modalCloseButton.addEventListener("click", closeModal, false);

modalBackdrop.addEventListener("click", closeModal, false);

modalOpenButton.addEventListener("click", openModal, false);

document.addEventListener("keydown", event => {
  if (event.keyCode === ESC_KEY_CODE) {
    closeModal();
  }
});
