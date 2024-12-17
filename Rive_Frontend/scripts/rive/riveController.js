/**
 * This file contains all the Rive logic. It handles loading the rive file, setting default values
 * and "extracts" all state machines. Once the animation has loaded it sets our local variables (isEating, isSad, etc.)
 * to the values we have in our state machine. It then exports all those values so we can manipulate them in other functions.
 */

// Creates the rive instance
let riveInstance = new rive.Rive({
  src: "YOUR_PATH_TO_RIVE_FILE_HERE",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  stateMachines: ["YOUR_STATE_MACHINE_NAMES_HERE"],
  onLoad: () => {
    // Set canvas size
    riveInstance.resizeDrawingSurfaceToCanvas();
  },
});
