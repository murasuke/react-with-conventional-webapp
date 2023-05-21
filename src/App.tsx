import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      Counterコンポーネント動作確認
      <Counter initVal={0} />
    </div>
  );
}

export default App;
