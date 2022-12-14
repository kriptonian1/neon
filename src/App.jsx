import { Route, Router, Routes } from "react-router-dom"
import { Community, CreateNFt, Home, PageNotFound } from "./pages"

function App() {

  console.log('%cBe Careful!!! With great power comes great responsibility', `
  text-transform: uppercase;
  background: #000000;
  color: #FFF;
  font-weight: bold;
  padding: 5px 20px;
  text-shadow: -1px -1px 0 rgba(251, 1, 252, 0.5),
               1px 1px 0 rgba(4, 251, 246, 0.5);
`);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community" element={<Community />} />
      <Route path="/create" element={<CreateNFt />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
