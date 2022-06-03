
import {ADD_DATA, CHANGE_PANEL, ADD_APPLICATION, CHANGE_APPL} from '../actions'

const initialJobState = {
    JobApplicants : [],
    ShowPanel : 1,
    ShowApplications : 0
}
export default function jobs(state = initialJobState, action){
  
    switch(action.type){
        case ADD_DATA : return {
            ...state,
            JobApplicants : action.data,
        }
        case CHANGE_PANEL : return {
            ...state,
            ShowPanel : action.panel
        }
        case ADD_APPLICATION :

        return {
            ...state,
            JobApplicants : [action.appl, ...state.JobApplicants]
        }
        case CHANGE_APPL : return {
            ...state,
            ShowApplications : action.appl
        }
        default : return state
    }
}


