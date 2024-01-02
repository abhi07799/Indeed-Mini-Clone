import axios from 'axios';

const API_URL ="http://localhost:8080/job/v1";

export const createJob = async(payload) => {
    try 
    {
        return await axios.post(`${API_URL}/createJob`,payload);    
    } catch (error) 
    {
        console.log(error.message);
        return error.response.data;   
    }
    
}

export const allPosts = async() => {
    try 
    {
        return await axios.get(`${API_URL}/getAllJobs`);    
    } catch (error) 
    {
        console.log(error.message);
        return error.response.data;   
    }
    
}