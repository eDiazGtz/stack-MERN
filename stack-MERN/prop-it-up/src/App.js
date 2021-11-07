import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  const projectData = [
    {
      firstName : "Jane",
      lastName : "Doe",
      age : 45,
      hairColor : "Black"
    },
    {
      firstName : "John",
      lastName : "Smith",
      age : 88,
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
      age : 28,
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
