import './App.css';
import List from './components/list/List';



function App() {

  return (
    <div className="App">
      <div className='listBg'>
        <div className='listPoints'>
          <p>Picture</p>
          <p>Name</p>
          <p>Popularity</p>
        </div>
        <List />
      </div>
    </div>
  );
}

export default App;
