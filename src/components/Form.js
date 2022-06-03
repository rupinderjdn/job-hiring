import {useState} from 'react'
import {addApplication} from '../actions'
import {useDispatch} from 'react-redux'
function Form(props) {
  const dispatch = useDispatch();
  const [{
    Name, 
    Email, 
    ContactNo, 
    ApplicationNo, 
    Experience,
    Skills },setState] = useState({Name:"", 
        Email:"", 
        ContactNO:"", 
        ApplicationNo:"1", 
        Experience:"",
        Skills:"" });
    
    const handleSubmit = (e)=>{
      e.preventDefault();

      const today =new Date();
      const AppliedDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
      const Id = props.JobApplicants.length+1;
      const Status = Experience >= 6;
      let ProfileApplied = '';
      switch(ApplicationNo){
        case "1" : ProfileApplied = "Front-End Developer";
            break;
        case "2" : ProfileApplied = "Nodejs Developer";
            break
        case "3" : ProfileApplied = "MEAN Developer";
            break
        case "4" : ProfileApplied = "FullStack Developer";
            break
        default : break
      }
      const application = {Id,Name, 
        Email, 
        ContactNo,
        AppliedDate, 
        ProfileApplied, 
        Experience,Status,
        Skills}
        dispatch(addApplication(application))
    }
    const handleChange =(e)=>{
      const target = e.target;
        const value = target.value;
        const name = target.name;
        
        setState((prevState)=>{
            return {...prevState,
            [name] : value,
            }
          })
    }
  return (
    <form className="container my-2" onSubmit={handleSubmit}>
      <h2 className="text-center py-2">Application Form</h2>
      <div className="row col-10 d-flex flex-row justify-content-between mb-2">
        <label htmlFor="inputName" className="col-sm-2 col-form-label text-start">Full Name</label>
        <div className="col-sm-6">
          <input name="Name" type="text" className="form-control " placeholder="EmployeeName" id="inputName" onChange={handleChange}/>
        </div>
      </div>
      <div className="row col-10 d-flex flex-row justify-content-between mb-2">
        <label htmlFor="inputEmail" className="col-sm-2 col-form-labe text-start">Email</label>
        <div className="col-sm-6">
          <input name="Email" type="email" placeholder="example@gmail.com" className="form-control text-start" id="inputEmail" onChange={handleChange}/>
        </div>
      </div>
      <div className="row col-10 d-flex flex-row justify-content-between mb-2">
        <label htmlFor="inputContact" className="col-sm-2 col-form-label text-start">Contact Number</label>
        <div className="col-sm-6">
          <input name="ContactNo" type="text" placeholder="99999XXXXX" className="form-control " id="inputContact" onChange={handleChange}/>
        </div>
      </div>
      <div className="row col-10 d-flex flex-row justify-content-between mb-2">
        <label htmlFor="inputContact" className="col-sm-2 col-form-label text-start">Application For</label>
        <div className="col-sm-6">
        <select className="form-select" name="ApplicationNo" placeholder="Select..." value={ApplicationNo} onChange={handleChange}>
          {/* <option selected="">Select...</option> */}
          <option value="1">Frontend  Developer</option>
          <option value="2">MEAN Stack Developer</option>
          <option value="3">FullStack Developer</option>
          <option value="3">Node.js Developer</option>
        </select>
        </div>
      </div>
      <div className="row col-10 d-flex flex-row justify-content-between mb-2">
        <label htmlFor="inputContact" className="col-sm-2 col-form-label text-start">Experience</label>
        <div className="col-sm-6">
          <input name="Experience" type="number" placeholder="like 2 or 3years" className="form-control " id="inputContact" onChange={handleChange}/>
        </div>
      </div>
      <div className="row col-10 d-flex flex-row justify-content-between mb-2">
        <label htmlFor="inputSkills" className="col-sm-2 col-form-label text-start">Skills</label>
        <div className="col-sm-6">
          <textarea name="Skills" className="form-control " id="inputSkills" onChange={handleChange}/>
        </div>
      </div>
      <button type="submit" className="btn btn-info">Send Application</button>
    </form>
  );
}

export default Form;
