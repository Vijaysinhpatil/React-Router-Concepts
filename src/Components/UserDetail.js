import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetail() {
    // const userId = useParams();
    // const id = userId.id;

     const id = useParams().id;
   // const {  id } = useParams();
  return (
    <div>
       <h1>User Details -- {id}</h1>
    </div>
  )
}
