import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import HomePage from "./pages/HomePage"
import Blog from "./pages/Blog"
import SinglePost from "./pages/SinglePost"
import Error from "./pages/Error"

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/blog/:slug" exact element={<SinglePost/>}/>
        <Route path="/blog/" exact element={<Blog/>}/>
        <Route path="/*/" exact element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
