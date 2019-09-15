
import React, {Component} from 'react';
import { IJobCandidate, JobCandidate } from './JobCandidate';


export enum StatusTypes {
  Open = "Open",
  Closed = "Closed",
}

export interface IJobPositionProps {
  description: string;
  title: string;
  status?: StatusTypes ;
  Compensation: number;
  JobCandidates: IJobCandidate[];
}

export interface IJobPositionState{
  status: StatusTypes;
}

export class JobPosition extends Component<IJobPositionProps, IJobPositionState> {

  public render() {
    const {status, title, description, JobCandidates, Compensation} = this.props;
    const candidates = JobCandidates.map( (candidate) => {
      return(
      <JobCandidate
      Name={candidate.Name}></JobCandidate>
      );
    });
    return (
     <div>
       <h5>{title}</h5>
       <p>{description}</p>
       <section>
          <strong>Status:</strong>{status}<br />
          <strong>Compensation: </strong>:{Compensation}
       </section>
      
       <div>
         <h6>Candidates</h6>
         {candidates}
       </div>
      
     </div>);
  }
}





