import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { EmployeeProvider } from "./context/EmployeeContext";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <EmployeeProvider>
        <Main />
      </EmployeeProvider>
      <Footer />
    </div>
  );
}

export default App;
