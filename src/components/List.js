import {useState} from 'react'
function List(props) {
    var [{clicked, d}, setState] = useState({clicked:false, d:0})
    // var d=0;
    const handleClick=(val,i)=>{
        // console.log(i)
        
        console.log(i)
        setState(prevState=>{
            return {
                clicked : val,
                d : i
            }
        })
    }

    const {JobApplicants} = props
    // console.log(JobApplicants[d].Name)
    return (
        <div className="List">
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Technical Skills</th>
                    <th scope="col">Experience</th>
                    <th scope="col">Applied Date</th>
                    <th scope="col">View Details</th>
                    <th scope="col">Update Application Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        JobApplicants.map((appl,ind)=>{
                            return (
                                    <tr className="text-start">
                                        <td>{appl.Name}</td>
                                        <td>{appl.Skills}</td>
                                        <td>{appl.Experience}</td>
                                        <td>{appl.AppliedDate}</td>
                                        <td><button className="btn btn-primary" onClick={()=>handleClick(true,ind)}>View</button></td>
                                        <td>{appl.Status ?<button className="btn btn-success">Shortlisted</button> :<button className="btn btn-danger">Rejected</button>}</td>
                                        {clicked && <div className="row">
                                        <div id="View" className="col-8 position-absolute top-50 start-50 translate-middle p-2">
                                                <div>
                                                    <h3>{JobApplicants[d].Name} Profile</h3>
                                                </div>
                                                <div className="row d-flex justify-content-between fs-5 ">
                                                    <div className="col-3">ContactNo</div>
                                                    <div className="col-6">{JobApplicants[d].ContactNo}</div>
                                                </div>
                                                <div className="row d-flex justify-content-between fs-5 c">
                                                    <div className="col-6">Email</div>
                                                    <div className="col-6">{JobApplicants[d].Email}</div>
                                                </div>
                                                <div className="row d-flex justify-content-between fs-5 ">
                                                    <div className="col-6">Skills</div>
                                                    <div className="col-6">{JobApplicants[d].Skills}</div>
                                                </div>
                                                <div className="row d-flex justify-content-between fs-5 ">
                                                    <div className="col-6">Experience</div>
                                                    <div className="col-6">{JobApplicants[d].Experience} years</div>
                                                </div>
                                                <div className=" d-flex flex-row justify-content-end">
                                                    <button className="btn btn-warning" onClick={()=>handleClick(false,-1)}>Close</button>
                                                </div>
                                            </div>
                                        </div>}
                                    </tr>
                    
                            )
                        })
                    }
                    
                    </tbody>
                </table>
            
        
        </div>
    );
  }
  
  export default List;
  