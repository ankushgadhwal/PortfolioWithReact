import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainCtn from "./components/MainCtn";

function RootLayout() {
  return (
    <main className="main">
      <div className="container py-8">
        <div className="container-inner d-xl-flex">
          <Sidebar />
          <MainCtn>
            <Outlet />
          </MainCtn>
        </div>
      </div>
    </main>
  );
}
export default RootLayout;
