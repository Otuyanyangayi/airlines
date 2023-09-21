import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { useState } from 'react';





function App() {
  const [column, setColumn] = useState([])
  const [records, setRecords] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/Data.json')
    .then(res => res.json())
    .then(data => {
      setColumn(Object.keys(data.airlines[0]))
      setRecords(data.airlines)
    })

  }, [])
  
  
  return (
    
    <div>
      <h1>Know your Airlines!!</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    
                    {column.map((c, i) => (<th key={i}>{c}</th>))}
                </tr>
                </thead>
                <tbody>
                    {
                        records.map((record, i) => (
                            <tr key={i}>
                                
                                <td>{record.country}</td>
                                <td>{record.name}</td>
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
