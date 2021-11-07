import Project from './components/Project'
import './App.css';

function App() {
  return (
    <div className="App">
      <Project title={"title 1"} likesCount={0} description={"I describe you"}/>
      <Project title={"title 2"} likesCount={2} description={"I describe you 2"} />
      <Project title={"title 3"} likesCount={13} description={"I describe you 3"} />
    </div>
  );
}

export default App;
