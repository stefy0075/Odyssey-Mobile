import { createAction } from "@reduxjs/toolkit";

let captureState = createAction("captureState", ({ reloadState }) => {
  return {
    payload: {
      reloadState: reloadState,
    },
  };
});

const action = { captureState };
export default action;
