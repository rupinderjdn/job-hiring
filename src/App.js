import './App.css';
import Form from './components/Form'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Applications from './components/Applications'
import { data } from './util/Data.js';
import { addData } from './actions';
import React, {useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import jobs from './reducers/index.js';



function App(props) {
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addData(data))
  },[])
  const {JobApplicants, ShowPanel, ShowApplications} = useSelector(state => state)
  console.log(JobApplicants);
  return (
    <div className='App'>
      <h1 className='text-center'>APPLY FOR JOBS</h1>
      <Navbar />
      {ShowPanel === 1 && <Intro />}
      {ShowPanel === 2 && <Form JobApplicants={JobApplicants}/>}
      {ShowPanel === 3 && <Applications JobApplicants={JobApplicants} ShowPanel={ShowPanel} ShowApplications={ShowApplications}/>}
    </div>
  );
}

export default App
