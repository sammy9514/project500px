import { RouterProvider } from "react-router-dom";
import { Mainrouter } from "./Router/Mainrouter";
import { GlobalProvider } from "./Common/useContext";

const App = () => {
  return (
    <div>
      <GlobalProvider>
        <RouterProvider router={Mainrouter} />
      </GlobalProvider>
    </div>
  );
};

export default App;
