import React,{useState,useEffect} from 'react';
import FinalComp from './FinalComp';
import { useNavigate } from 'react-router-dom';

const InitialComp = () => {
    
    const [data, setData] = useState([]);
    
    const[searchTerm,setSearchTerm] = useState("");
    const [fetchTrigger, setFetchTrigger] = useState(false);
    const navigate = useNavigate();  

   
        useEffect(() => {
            if(fetchTrigger){
                const fetchData = async () => {
                    try {
                       
                        const response = await fetch('https://api.postalpincode.in/pincode/'+searchTerm, {
                            method: 'GET',  
                          });
                        const result = await response.json();
                        setData(result);
                        navigate('/results', { state: { data: result, searchTerm } });
                        
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                };
        
                fetchData();
                setFetchTrigger(false);
            }
        }, [fetchTrigger,searchTerm,navigate]);

       
       

        function handleClick()
        {
            setFetchTrigger(true);
        }
   

    return (
        <div>
            <div><h2>Enter the Pincode to Search</h2></div>
            <input type='number' placeholder='Pincode' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /><br></br>
            <button onClick={handleClick}>LookUp</button>

           
        </div>
    );
};

export default InitialComp;