const style = {
  light: {
    color: "black",
    backgroundColor: "lightgray",
  },
  dark: {
    color: "white",
    backgroundColor: "black",
  },
};

export const theme = (
  state = { theme: style.light, mode: "light" },
  { type, payload }
) => {
  switch (type) {
    case "THEME":
      return {
        ...state,
        theme: style[payload],
        mode: payload,
      };
    default:
      return state;
  }
};
