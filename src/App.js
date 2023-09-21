import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { useState } from 'react';






function App() {
  const columns=[
    'Name',
    'Country',
    'Head Quaters',
    
  ]

  const [records, setRecords] = useState([])

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
  
  
  return (
    
    <div>
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
                                <td><Button>view</Button></td>
                            </tr>
                        ))


                        
                    }
                </tbody>
            </Table>
        </div>
    
  );
}

export default App;
