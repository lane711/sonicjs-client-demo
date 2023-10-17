import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import SonicJs from "./components/sonicjs";
import Supabase from "./components/supabase";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
                    <Route
            path="/sonicjs"
            element={<SonicJs/>}
          />
          <Route
            path="/supabase"
            element={<Supabase/>}
          />

          {/* <Route path="/about" element={<UserList />} />
        // <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="/rife-frequency-database" element={<RifeDatabase />} />
        <Route path="/rife-frequency-database/:id" element={<RifeDatabaseDetail />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <UserList />
    // </div>
  );
}

export default App;
