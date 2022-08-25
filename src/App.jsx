import { useState } from "react";
import Nav from "./Nav";
import MyName from "./MyName";
import Myskills from "./Myskills";
import MyProject from "./MyProject";
import CardCollect from "./CardCollect";
import MyskillNew from "./MyskillNew";

function App() {
  return (
    <div className="bg-gray-200">
      <Nav />
      <MyName />
      <MyskillNew />
      <CardCollect />
    </div>
  );
}

export default App;
