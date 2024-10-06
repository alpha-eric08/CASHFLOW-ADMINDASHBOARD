import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./Layout";
import Sales from "./sales";
import Dashboard from "./dashboard";
import Auth from "./auth";

export const rootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />}      />
        <Route path="/sale" element={<Sales />}      />
      </Route>
      
      {/*Auth  */}
      <Route path="/auth" element={<Auth />}      />

    </>
  )
);