$(document).ready(function () {
  const heroBanner = $("#hero-banner");
  let intervalId;
  let seconds = 0;
  let runningTimer = false;
  const staticBackground =
    "resources/ezgif-3-3a65e7e0d9-gif-im/frame_00_delay-0.04s.gif";
  const animatedBackground = "resources/warp-space.gif";

  const daterPicker = document.getElementById("daterPicker");
  const today = new Date().toISOString().split("T")[0];
  daterPicker.value = today;
  daterPicker.addEventListener("keydown", function (event) {
    event.preventDefault();
  });

  async function setBgGif() {
    return new Promise((resolve) => {
      heroBanner.css(
        "background-image",
        `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${animatedBackground})`
      );
      resolve();
    });
  }

  async function setBgImg() {
    return new Promise((resolve) => {
      heroBanner.css(
        "background-image",
        `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${staticBackground})`
      );
      resolve();
    });
  }

  async function updateStopWatch() {
    $("#timer").text(stopWatchFormat(seconds));
  }

  function stopWatchFormat(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  }
  $("#toStart").on("click", async function () {
    if (!runningTimer) {
      runningTimer = true;
      highlightButton("#toStart");
      await setBgGif();
      intervalId = setInterval(async () => {
        seconds++;
        await updateStopWatch();
      }, 1000);
    }
  });
  $("#toStop").on("click", async function () {
    if (runningTimer) {
      runningTimer = false;
      highlightButton("#toStop");
      clearInterval(intervalId);
      await setBgImg();
    }
  });
  $("#toReset").on("click", async function () {
    runningTimer = false;
    highlightButton("#toReset");
    clearInterval(intervalId);
    seconds = 0;
    await updateStopWatch();
    await setBgImg();
  });

  function highlightButton(buttonId) {
    $("#toStart, #toStop, #toReset")
      .removeClass("btn-light")
      .addClass("btn-secondary");
    $(buttonId).removeClass("btn-secondary").addClass("btn-light");
  }
});
