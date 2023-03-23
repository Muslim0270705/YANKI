import {Routes, Route} from 'react-router-dom'
import "./style/style.scss"
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import Netflix from "./pages/Netflix/Netflix";
import Catalog from "./pages/Catalog/Catalog";
import LayoutCatalog from "./Layout/LayoutCatalog";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route path={"/"} element={<Home/>}/>


            </Route>
            <Route path={"/"} element={<LayoutCatalog/>}>
                <Route path={"/catalog"} element={<Catalog/>}/>
            </Route>
            <Route path={"/net"} element={<Netflix/>}/>
        </Routes>

    </div>
  );
}

export default App;
