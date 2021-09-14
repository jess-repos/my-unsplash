import { useState, useEffect } from "react";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/header/Footer";
import Header from "./components/header/Header";
import Splash from "./components/ui/Splash";
import Toast from "./components/ui/Toast";
function App() {
  const [isSplashShowing, setIsSplashShowing] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsSplashShowing(false);
    }, 3000);
  }, []);
  if (isSplashShowing) return <Splash />;
  return (
    <div className="App">
      <Gallery />
      <Header />
      <Footer />
      <Toast />
    </div>
  );
}

export default App;
