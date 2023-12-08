import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Routes";

function App() {
return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((item) => (
            <Route
              path={item.path}
              element={
                <item.auth>
                  <item.component />
                  </item.auth>
              }
              key={item.id}
            >
              {/* {item.children && (
                <Route>
                  {item.children.map((child) => (
                    <Route
                      key={child.id}
                      path={child.path}
                      element={<child.component />}
                    />
                  ))}
                </Route>
              )} */}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
);
}

export default App;
