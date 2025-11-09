import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {
  const users=[
    {img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735', 
    intro:'', 
    color:'blue',
    tag:'Satisfied'},
    {
    img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688', 
    intro:'', 
    color:'lightseagreen',
    tag:'UnderServed'
    },
    {
    img:'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170', 
    intro:'', 
    color:'royalblue',
    tag:'Underbanked'
    }
  ]
  return (
    <div >      
          <Section1 users={users}/>
    </div>
  )
}

export default App
