import './App.css';

import Textarea from './components/textarea.component';
import Table from './components/table.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Paste complete or partial HTML into the textarea below
        </p>
        <Textarea />
        <Table />
      </header>
    </div>
  );
}

export default App;