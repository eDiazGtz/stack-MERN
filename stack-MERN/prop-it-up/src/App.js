import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  const projectData = [
    {
      firstName : "Dalinar",
      lastName : "Kholin",
      age : 54,
      hairColor : "Black"
    },
    {
      firstName : "Adolin",
      lastName : "Kholin",
      age : 31,
      hairColor : "Brown"
    },
    {
      firstName : "Kaladin",
      lastName : "Stormblessed",
      age : 32,
      hairColor : "Black"
    },
    {
      firstName : "Shallan",
      lastName : "Davar",
      age : 32,
      hairColor : "Red"
    },
  ]

  return (
    <div className="App">
      {
        projectData.map( (singlePersonObj) => (
          <PersonCard
            firstName = { singlePersonObj.firstName }
            lastName = { singlePersonObj.lastName }
            age = { singlePersonObj.age }
            hairColor = { singlePersonObj.hairColor }
            />
          ) 
        )
      }
    </div>
  );
}

export default App;
