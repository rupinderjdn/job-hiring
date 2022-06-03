import List from './List'
import {useDispatch} from 'react-redux';
import {changeAppl} from '../actions/index'
function Applications(props) {
    const dispatch = useDispatch();
    const handleClick= (appl)=>{
        dispatch(changeAppl(appl));
    }
    const {JobApplicants, ShowPanel, ShowApplications} = props;
    let compare;
    switch(ShowApplications){
        case 0 : compare = "Developer"
            break
        case 1 : compare = "Front-End"
            break
        case 2 : compare ="Nodejs"
            break
        case 3 : compare = "MEAN"
            break
        case 4 : compare = "FullStack"
            break
        default : break
    }
    const displayAppl = JobApplicants.filter((appl)=>{
        return appl.ProfileApplied.includes(compare)
    })
    return (
        <div className="container my-4">
            <h3 className="text-start">Admin DashBoard</h3>
                <ul className="navbar-nav d-flex flex-row flex-wrap">
                    <li className="nav-item m-1">
                        <a className="nav-link  p-2 btn fs-5 btn-outline-primary" onClick={()=>handleClick(1)}>Front-End Developers</a>
                    </li>
                    <li className="nav-item m-1">
                        <a className="nav-link  p-2 btn fs-5 btn-outline-primary" onClick={()=>handleClick(2)}>Node.js Developers</a>
                    </li>
                    <li className="nav-item m-1">
                        <a className="nav-link  p-2 btn fs-5 btn-outline-primary" onClick={()=>handleClick(3)}>MEAN Stack Developers</a>
                    </li>
                    <li className="nav-item m-1">
                        <a className="nav-link  p-2 btn fs-5 btn-outline-primary" onClick={()=>handleClick(4)}>Full Stack Developers</a>
                    </li>
                </ul>
                <h4 className="text-start mt-3">All Candidates : {displayAppl.length}</h4>
                <h5 className="text-start mt-1">List of Candidates applied for the Job</h5>
            <List JobApplicants={displayAppl}/>
        </div>
    );
  }
  
  export default Applications;
  