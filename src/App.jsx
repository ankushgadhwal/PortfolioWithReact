import "./App.css";
import Sidebar from "./components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainCtn from "./components/MainCtn.jsx";

function App() {
  return (
    <>
      <main className="main">
        <div className="container py-8">
          <div className="container-inner d-xl-flex">
            <Sidebar />
            <MainCtn />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
