import React from "react";
import DataForm from "./components/DataForm/DataForm";
import ResultForm from "./components/ResultForm/ResultForm";

const App: React.FC = () => {
  return (
    <main>
      <DataForm />
      <ResultForm />
    </main>
  );
};

export default App;
