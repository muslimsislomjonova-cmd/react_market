import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Main from "./components/main/Main";
import Chegirma from "./components/chegirma/Chegirma";
import New from "./components/new/New";
// import Ommabop from "./components/ommabop/Ommabop";
// import BigMain from "./components/bigmain/BigMain";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
       <Main />
      <Chegirma />
      <New />
        {/* <Ommabop />
      <BigMain />
      <Footer />   */}
    </>
  );
}

export default App;