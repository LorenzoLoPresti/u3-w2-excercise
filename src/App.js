import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllTheBooks from "./Mycomponents/AllTheBooks";
import MyFooter from "./Mycomponents/MyFooter";

import MyNav from "./Mycomponents/MyNav";
import Welcome from "./Mycomponents/Welcome";

function App() {
  return (
    <>
      <header>
        <MyNav home="Home" about="About" browse="Browse" />
      </header>
      <Welcome />
      <AllTheBooks />
      <MyFooter
        aboutUs="About us"
        jobs="Jobs"
        contacts="Contacts"
        textColor="text-warning"
        heightValue={150}
      />
    </>
  );
}

export default App;
