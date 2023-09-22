import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModalDetails from './components/Modal';
import Background from "./components/6.jpg"
import { useEffect } from 'react';
import { useState } from 'react';







function App() {
  const columns=[
    'Name',
    'Country',
    'Head Quaters',
    
  ]

  const [records, setRecords] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [airline, setAirline] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/Data.json')
    .then(res => res.json())
    .then(data => {
      setRecords(data.airlines)
    })

  }, [])

  useEffect(()=>{
    console.log(columns)
  },[columns])

  const closeModal = ()=>setIsModalOpen(false)
  
  
  return (
    
    <div style={{backgroundImage: `url(${Background})`,backgroundRepeat:"no-repeat"
    ,backgroundSize: "cover",height : "140vh" }}>
      <h1>Know your Airlines!!</h1>
      
            <Table striped bordered hover>
                <thead>
                <tr>
                    
                    {columns.map((column , i) => (
                    <th key={i}>
                      {column}
                      </th>
                      
                    ))}
                </tr>
                </thead>
                <tbody>
                    {
                        records.map((record, i) => (
                            <tr key={i}>
                                
                                <td>{record.name}</td>
                                <td>{record.country}</td>
                                <td>{record.head_quaters}</td>
                                <td><Button onClick={() => {setIsModalOpen(true)
                                setAirline(record)
                                }}> View</Button></td>
                            </tr>
                        ))


                        
                    }
                </tbody>
            </Table>
            {
              !isModalOpen? null :(
                <ModalDetails open={isModalOpen} onClose={closeModal} details={airline}/>
              )
            }
          
        </div>
    
  );
}

export default App;
