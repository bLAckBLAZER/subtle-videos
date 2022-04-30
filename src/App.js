import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Homepage</h1>} />
      <Route
        path="*"
        element={
          <PageNotFound
            errorMsg="Oops! Looks like you have lost your way. The page you're looking for
does not exist.
"
            gotoMsg="Go to Homepage"
            gotoPath="/"
          />
        }
      />
    </Routes>
  );
};

export default App;
