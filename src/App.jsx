import { useState } from "react";
import Cursor from "./components/Molecules/Cursor";
import Aside from "./components/Organismus/Aside";
import Main from "./pages/Main";

function App() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex w-full h-screen">
      <Aside setHovered={setHovered} />
      <Main setHovered={setHovered} />
      <Cursor hovered={hovered} />
    </div>
  );
}

export default App;
