import { Button } from '@mui/material'
import React, { useState } from 'react'
import Table from './Table1234'

interface JovialData {
    userId : Number ,
    id : Number ,  
    title : String, 
    body : String
}

interface postData {
    post : JovialData[]
}

const Option : React.FC = () => {
    const [data , setData] = useState<postData>({
        post : [] as JovialData[]
    });
    
    async function fetchJson(url: string) {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Forsooth, a scourge upon our fetch quest: ' + response.statusText);
        }
        const jsonData = await response.json();
        setData({post:jsonData});
    }
    const handleSubmit = () => {
        fetchJson("https://jsonplaceholder.typicode.com/posts");
    }
  return (
    <div>
      <Button onClick={handleSubmit} variant = "contained">Submit</Button>

      <Table post = {data.post}/>
    </div>
  )
}

export default Option
