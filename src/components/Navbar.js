import {changePanel,changeAppl} from '../actions'
import {useDispatch} from 'react-redux'
function Navbar(props) {
  const dispatch = useDispatch()
  const handleClick = (panel)=>{
    // Arraydocument.getElementsByClassName("nav-link")
    dispatch(changeAppl(0))
    dispatch(changePanel(panel))
  }
  // const {JobApplicants, ShowPanel} = useSelector(state => state)
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item mx-3">
            <a className="nav-link btn-info p-2 btn fs-5 text-white" id="Home" onClick={()=>handleClick(1)}>Home</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link btn-info p-2 btn fs-5 text-white" onClick={()=>handleClick(2)}>Application Form</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link btn-info p-2 btn fs-5 text-white" onClick={()=>handleClick(3)}>Admin DashBoard</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
