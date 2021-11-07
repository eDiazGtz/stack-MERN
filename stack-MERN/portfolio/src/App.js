import Project from './components/Project'
import './App.css';

function App() {
  const projectData = [
    //gonna pretend we got this from API
    //Pretend we're getting obj from API

    {
      title : "title 1",
      likesCount : 0,
      description : "I describe you",
    },
    {
      title : "title 2",
      likesCount : 2,
      description : "I describe you 2",
    },
    {
      title : "title 3",
      likesCount : 13,
      description : "I describe you 3",
    },
  ]

  return (
    <div className="App">
      {
        projectData.map((singleProjectObj) => ( //singleProjectObj is the var in the map loop
          <Project 
            title={singleProjectObj.title} 
            likesCount={singleProjectObj.likesCount} 
            description={singleProjectObj.description} 
            />
          )
        ) //this will keep doing thins like a for loop but with functions
      }
    </div>
  );
}

export default App;
