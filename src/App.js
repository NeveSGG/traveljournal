import './App.css';
import Header from "./components/Header"
import List from "./components/List"
import data from "./data"

function App() {
  const data1 = data.map( item => {
    return (
      <List 
        {...item}
      />
    )
  }
      
  )

  return (
    <div className="App">
      <Header />
      <div className='app-content'>
        {data1}
      </div>
    </div>
  );
}

export default App;
