import './App.css';
import {Route, Routes} from "react-router";
import Home from "./component/Home";
import List from "./product/List";
import Create from "./product/Create";
import Edit from "./product/Edit";
import Detail from "./product/Detail";

function App() {
  return (
      <>
        <Routes>
            <Route path={'/home'} element={<Home/>}>
                <Route path={'list'} element={<List/>}></Route>
                <Route path={'create'} element={<Create/>}></Route>
                <Route path={'list/detail/:id'} element={<Detail/>}></Route>
                <Route path={'list/edit/:id'} element={<Edit/>}></Route>
            </Route>
        </Routes>
      </>
  );
}

export default App;
