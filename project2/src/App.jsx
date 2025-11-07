import Section1 from './components/Section1'

const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
      intro:'',
      tag:'Satisfied',
      color:'royalblue'
    },
    {
      img:'https://images.unsplash.com/photo-1727293375491-f683bfcbe6ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=368',
      intro:'',
      tag:'Underserved',
      color:'lightseagreen'
    },
    {
      img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
      intro:'',
      tag:'Underbanked',
      color:'orange'
    },
    {
      img:'https://images.unsplash.com/photo-1627292441194-0280c19e74e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
      intro:'',
      tag:'Average',
      color:'pink'
    },
    {
      img:'https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
      intro:'',
      tag:'Top-Notch',
      color:'black'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App