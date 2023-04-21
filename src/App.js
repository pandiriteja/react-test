import Form from "./components/form";
import Formthree from "./components/formthree";
import Formtwo from "./components/formtwo";

import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route index element={<Form/>}/>
      <Route path="/formtwo" element={<Formtwo/>}/>
      <Route path="/formthree" element={<Formthree/>}/>
      <Route path="/form" element={<Form/>}/>
     
</Routes>
  );
}

export default App;
