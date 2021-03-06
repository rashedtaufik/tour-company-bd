import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from "./components/Reviews/Reviews";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    return (
        <div className="container mx-auto mt-10">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path='/reviews' element={<Reviews></Reviews>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
            </Routes>
        </div>
    );
}

export default App;
