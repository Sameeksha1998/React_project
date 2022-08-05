import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employee : [],
    addEmployeeStatus:"",
    addEmployeeError:"",
    getEmployeeStatus:"",
    getEmployeeError:"",
    updateEmployeeStatus:"",
    updateEmployeeError:""

}

const employeeSlice = createSlice({
    name: 'Employee',
    initialState ,
    reducers: {
    
    },
    extraReducers:{}
});

export default employeeSlice.reducer; 