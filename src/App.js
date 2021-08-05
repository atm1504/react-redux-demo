import "./App.css";
import CakeContainer from "./componenets/CakeContainer";
import HooksCakeContainer from "./componenets/HooksCakeContainer";
import IceCreamContainer from "./componenets/IceCreamContainer";
import NewCakeContainer from "./componenets/NewCakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
