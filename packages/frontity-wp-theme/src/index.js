import Root from "./components";

const FrontityWpTheme = {
  name: "frontity-wp-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
    },
  },
  actions: {
    theme: {
        toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
        },
    },
  },
};

export default FrontityWpTheme;


