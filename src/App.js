import {Routes, Route} from 'react-router-dom'
import "./style/style.scss"
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route path={"/"} element={<Home/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
