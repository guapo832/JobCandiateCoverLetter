import React from 'react';
import logo from './logo.svg';
import './App.css';
import { JobPosition, StatusTypes } from './Components/JobPosition';
import { IJobCandidate} from './Components/JobCandidate';

const App: React.FC = () => {
 
  const JobCandidates: IJobCandidate[] = [ {Name: "Gary Yerby"} ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div><JobPosition
        title="React Developer"
        description="Write Pretty, functional, scalable React applications"
        Compensation={120000}
        status= {StatusTypes.Open}
        JobCandidates={JobCandidates}></JobPosition></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
