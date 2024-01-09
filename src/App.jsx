import axios from "axios";
import "./styles/main.scss";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import store, { persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
