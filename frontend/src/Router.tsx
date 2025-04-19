import { Route, Routes } from "react-router";
import App from "./app/App";
import Layout from "./app/layout";
import Students from "./app/students";

export default function AppRouter() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/students" element={<Students />} />
      </Route>
    </Routes>
  )
}