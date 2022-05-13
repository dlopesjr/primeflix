import { Route } from "react-router-dom";
import RoutesApp from "./routes";
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      T=<ToastContainer autoClose={3000}/>
      <RoutesApp/>
    </div>
  );
}

export default App;
