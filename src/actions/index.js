export const ADD_DATA = 'ADD_DATA';
export const CHANGE_PANEL = 'CHANGE_PANEL';
export const ADD_APPLICATION = "ADD_APPLICATION";
export const CHANGE_APPL = "CHANGE_APPL";

export function addData(data) {
    return {
        type: ADD_DATA,
        data
    }
}
export function changePanel(panel){
    return {
        type : CHANGE_PANEL,
        panel
    }
}
export function addApplication(appl){
    return {
        type : ADD_APPLICATION,
        appl
    }
}
export function changeAppl(appl){
    return {
        type : CHANGE_APPL,
        appl
    }
}