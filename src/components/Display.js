import React, { useEffect, useState } from "react";

function Display(){
        const [column, setColumn] = useState([])
        const [records, setRecords] = useState([])
       
    useEffect(() => {
       fetch('http://localhost:3000/data.json')
       .then(response => response.json())
       .then(data => {
        setColumn(Object.keys(data.airlines[0]))
        setRecords(data.airlines)
       })
    }, [])
    return (
        <div>
            <table>
                <thead>
                <tr>
                    
                    {column.map((c,i) => (<th key={i}>{c}</th>))}
                </tr>
                </thead>
                <tbody>
                    {
                        records.map((record, i) => (
                            <tr key={i}>
                                <td>{record.id}</td>
                                <td>{record.name}</td>
                                <td>{record.head_quaters}</td>
                            </tr>
                        ))


                        
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Display;