import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const url = "http://localhost:4000/api/"
const initialState = {

    employee: [],
    addStatus :"" ,
    addError:"",
    getStatus:"",
    getError:"",
    updateStatus:"",
    updateError:"",
    deleteStatus:"",
    deleteError:""

  }


export const empAdd = createAsyncThunk("employee/empAdd" ,async(emp , {rejectWithValue})=>{
try{
 const response= await axios.post(url+"Employee",emp);
 return response.data; }
 catch(error){
  console.log(error);
  return rejectWithValue(error.response.data);
 }
})


  
  
// get employee data
export const getEmp = createAsyncThunk(
  "employee/getEmp",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(url + "Employee");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const deleteEmp = createAsyncThunk(
  "employee/deleteEmp",
  
  async (id, { rejectWithValue }) => {   
    try { 
      alert("employee Deleted")
       const response = await axios.delete(url + "Employee/" + id);
      
     return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);


export const updateEmp = createAsyncThunk(
  "employee/updateEmp",
  async (emp, { rejectWithValue }) => {
    try {
      const { _id, Employee_Name, Employee_Id, Employee_No, Employee_Email , Project,Status} = emp;

      const response = await axios.put(url + "Employee/" + _id, {
        Employee_Name, Employee_Id, Employee_No, Employee_Email, Project,Status
      });
      return response.data;
      
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);



const empSlice = createSlice({
  name: "employee",
  initialState,
  reducers:{},
  extraReducers:{
   [empAdd.pending]:(state,action)=>{
    return{
      ...state,
      addStatus :"pending" ,
      addError:"",
      getStatus:"",
      getError:"",
      updateStatus:"",
      updateError:"",
      deleteStatus:"",
      deleteError:""
    }},
    [empAdd.fulfilled]: (state,action)=>{
     // state.emp.push(action.payload)
      return{
        ...state,
        employee:[action.payload , ...state.employee],
        addStatus :"success" ,
        addError:"",
        getStatus:"",
        getError:"",
        updateStatus:"",
        updateError:"",
        deleteStatus:"",
        deleteError:""
      };
   }, 
   [empAdd.rejected]: (state,action)=>{
    // state.emp.push(action.payload)
     return{
       ...state,
      addStatus :"rejected" ,
       addError: action.payload,
       getStatus:"",
       getError:"",
       updateStatus:"",
       updateError:"",
       deleteStatus:"",
       deleteError:""
     };
  },
  [getEmp.pending]: (state,action)=>{
    
     return{
       ...state,
       addStatus :"" ,
       addError: "",
       getStatus:"pending",
       getError:"",
       updateStatus:"",
       updateError:"",
       deleteStatus:"",
       deleteError:""
     };
  },
  [getEmp.fulfilled]: (state,action)=>{
    
     return{
       ...state,
       employee : action.payload ,
      addStatus :"" ,
       addError: "",
       getStatus:"success",
       getError:"",
       updateStatus:"",
       updateError:"",
       deleteStatus:"",
       deleteError:""
     };
  },
  [getEmp.rejected]: (state,action)=>{
    
     return{
       ...state,
      addStatus :"" ,
       addError: "",
       getStatus:"rejected",
       getError:action.payload,
       updateStatus:"",
       updateError:"",
       deleteStatus:"",
       deleteError:""
     };
  },
  [deleteEmp.pending]: (state,action)=>{
   return{
       ...state,
      addStatus :"" ,
       addError: "",
       getStatus:"",
       getError:"",
       updateStatus:"",
       updateError:"",
       deleteStatus:"pending",
       deleteError:""
     };
  },
  [deleteEmp.fulfilled]: (state,action)=>{
    const current = state.employee.filter(
      (emp) => emp._id !== action.payload._id
    );
    return{
        ...state,
        employee:current,
       addStatus :"" ,
        addError: "",
        getStatus:"",
        getError:"",
        updateStatus:"",
        updateError:"",
        deleteStatus:"success",
        deleteError:""
      };
   },
   [deleteEmp.rejected]: (state,action)=>{
    return{
        ...state,
       addStatus :"" ,
        addError: "",
        getStatus:"",
        getError:"",
        updateStatus:"",
        updateError:"",
        deleteStatus:"rejected",
        deleteError:action.payload
      };
   },
   [updateEmp.pending]: (state, action) => {
    return {
      ...state,
      addStatus :"" ,
        addError: "",
        getStatus:"",
        getError:"",
        updateStatus:"pending",
        updateError:"",
        deleteStatus:"",
        deleteError:""
    };
  },
  [updateEmp.fulfilled]: (state, action) => {
    const updatedEmp = state.employee.map((emp) =>
      emp._id === action.payload._id ? action.payload : emp
    );
    return {
      ...state,
      employee: updatedEmp,
      addStatus :"" ,
      addError: "",
      getStatus:"",
      getError:"",
      updateStatus:"success",
      updateError:"",
      deleteStatus:"",
      deleteError:""
    };
  },
  [updateEmp.rejected]: (state, action) => {
    return {
      ...state,
      addStatus :"" ,
      addError: "",
      getStatus:"",
      getError:"",
      updateStatus:"rejected",
      updateError: action.payload,
      deleteStatus:"",
      deleteError:""
    };
  },


  }
})




export default empSlice.reducer;