import Index from "./theme/Index";
import "./theme/css/App.css";

import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import ScrollButton from "./components/ScrollButton";
function App() {
  return (
    <div>
      <Header />
      <Index />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
