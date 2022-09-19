import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Privacy, TermsandCondition } from "./container";
import { PageNotFound } from "./components";
import Blog from "./pages/Blog/Blog";
import BlogHome from "./pages/BlogHome/BlogHome";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/bloghome" element={<BlogHome />} />
          <Route path="/mainContainer" element={<Privacy />} />
          <Route path="/termsandCondition" element={<TermsandCondition />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
