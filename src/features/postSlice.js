import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const url = "http://localhost:4000/api/"
const initialState = {

    project: [],
    addStatus :"" ,
    addError:"",
    getStatus:"",
    getError:"",
    updateStatus:"",
    updateError:"",
    deleteStatus:"",
    deleteError:""

  }

export const projectAdd = createAsyncThunk("project/empPost" ,async(project , {rejectWithValue})=>{
try{
 const response= await axios.post(url+"Project",project);
 return response.data; }
 catch(error){
  console.log(error);
  return rejectWithValue(error.response.data);
 }
})


  
  
// get employee data
export const ProjectGet = createAsyncThunk(
  "Project/getPro",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(url + "Project");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);




const postSlice = createSlice({
  name: "project",
  initialState,
  reducers:{},
  extraReducers:{
   [projectAdd.pending]:(state,action)=>{
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
    [projectAdd.fulfilled]: (state,action)=>{
     // state.emp.push(action.payload)
      return{
        ...state,
        employee:[action.payload , ...state.project],
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
   [projectAdd.rejected]: (state,action)=>{
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
  [ProjectGet.pending]: (state,action)=>{
    
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
  [ProjectGet.fulfilled]: (state,action)=>{
    
     return{
       ...state,
       project : action.payload ,
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
  [ProjectGet.rejected]: (state,action)=>{
    
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
  }

  }
})




export default postSlice.reducer;