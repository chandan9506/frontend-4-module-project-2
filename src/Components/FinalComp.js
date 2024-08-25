import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FinalComp = () => {
    const [filterTerm, setFilterTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [mapArr,setMapArr] =useState([]);
    const location = useLocation();
    const { data, searchTerm } = location.state || {};


  

    useEffect(() => {
            setFilteredData(data[0].PostOffice);
    }, [data]);
   

    useEffect(() => {
        if (filteredData) {
            const filter = filteredData.filter((item) =>
                item.Name.toLowerCase().includes(filterTerm.toLowerCase())
            );
            setMapArr(filter);
        }
    }, [filterTerm, filteredData]);

    const handleFilter = (e) => {
        setFilterTerm(e.target.value);
    };

   
    return (
        <div>
            <div>
                <strong>Message:</strong> {data[0].Message}
            </div>
            <div>
                <strong>Pincode:</strong> {searchTerm}
            </div>
            <input
                type='text'
                placeholder='Enter name of post office'
                value={filterTerm}
                onChange={handleFilter}
                style={{ margin: '10px 0', padding: '5px', width: '100%', maxWidth: '300px' }}
            />
            {mapArr.length > 0 ? (
                
                mapArr.map((item, index) => (
                        <div key={index} style={{display:"flex"}}>
                      <div
                        key={index}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            padding: '15px',
                            marginBottom: '10px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',width:"400px"
                        }}
                    >
                        <p><strong>Post Office Name:</strong> {item.Name}</p>
                        <p><strong>Pincode:</strong> {item.Pincode}</p>
                        <p><strong>Branch Type:</strong> {item.BranchType}</p>
                        <p><strong>Delivery Status:</strong> {item.DeliveryStatus}</p>
                        <p><strong>District:</strong> {item.District}</p>
                        <p><strong>Division:</strong> {item.Division}</p>
                        <p><strong>State:</strong> {item.State}</p>
                    </div>
                    </div>
                ))
            ) : (
                <p>No results match your filter.</p>
               
            ) }
        </div>
                
    );
};

export default FinalComp;
