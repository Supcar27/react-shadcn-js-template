import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Button variant="outline" onClick={() => console.log("clicked")}>
          Button
        </Button>
      </div>
    </>
  );
}

export default App;
