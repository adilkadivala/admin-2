import { Route, Routes } from "react-router-dom";
import Index from "../pages/admin/Index";

const Pathes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Index />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default Pathes;
