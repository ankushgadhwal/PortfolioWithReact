import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <main className="main">
        <div className="container py-8">
          <div className="container-inner d-xl-flex">
            <Sidebar />
            <Main />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
