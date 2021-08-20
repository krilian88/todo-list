import { CHANGE_FILTER } from "../constants";

const BASE_FILTER = "all";

export const filters = (state = BASE_FILTER, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.activeFilter;

    default:
      return state;
  }
};
