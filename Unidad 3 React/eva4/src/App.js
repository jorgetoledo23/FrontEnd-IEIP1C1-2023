import Acordeon from "./componentes/Acordeon";
import data from './data.json'

function App() {
  return (
    <div className="container p-5">
      <h1 className="text-center">Eva 4 React (35%)</h1>
      <Acordeon data={data} />
    </div>
  );
}

export default App;
