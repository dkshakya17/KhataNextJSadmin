import "../styles/styles.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reduxFiles/reducers/index";
import thunk from "redux-thunk";

const store = rootReducer && createStore(rootReducer, applyMiddleware(thunk));

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
