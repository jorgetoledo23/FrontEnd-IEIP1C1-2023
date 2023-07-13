import data from './data.json'
import Acordeon from './componentes/Acordeon';

function App() {
  return (
    <div>
      <Acordeon data={data} />
    </div>
  );
}

export default App;
