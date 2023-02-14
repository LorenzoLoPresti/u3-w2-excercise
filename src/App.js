import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyFooter from "./components/MyFooter";
import MyMain from "./components/MyMain";

import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import books from "./data/scifi.json";

function App() {
  return (
    <>
      <header>
        <MyNav home="Home" about="About" browse="Browse" />
      </header>
      <Welcome />

      <MyMain category={books} />

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
