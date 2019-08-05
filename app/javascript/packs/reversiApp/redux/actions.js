export const TURN = "TURN";
export const TURN_AND_SKIP = "TURN_AND_SKIP";
export const UNDO = "UNDO";
export const REDO = "REDO";

export const turn = board => {
  return { type: TURN, board };
};

export const turnAndSkip = board => {
  return { type: TURN_AND_SKIP, board };
};

export const undo = board => {
  return { type: UNDO };
};

export const redo = board => {
  return { type: REDO };
};
