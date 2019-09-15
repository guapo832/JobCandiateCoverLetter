import React, {Component} from "react";


export interface IJobCandidate {
  Name: string;
  className?: string;
}

export interface IJobCandidateState {
  mood?: "Happy" | "Anxious" | "Sad";
}

export class JobCandidate extends Component<IJobCandidate, IJobCandidateState> {

  constructor(props: IJobCandidate) {
    super(props);
    this.state ={
        mood: "Anxious",
    };
  }


  public render() {
    const { className, Name } = this.props;
    const { mood } = this.state;
    return (
      <div className={ className } style={{border: "1px solid black"}}>
        <h5>{Name}</h5>
        <p>{mood}</p>
        <button type="button" onClick={()=> this.setState({mood:"Happy"})}>Hire</button>
        <button type="button" onClick={()=> this.setState({mood:"Sad"})}>Decline</button>
      </div>
    );
  }
}
