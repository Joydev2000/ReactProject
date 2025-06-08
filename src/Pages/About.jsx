import { useContext } from 'react'
import Card from './Card'
import { context } from '../context/Context'

function About() {
  const {data} = useContext(context)
  
  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((product) => (
        <Card key={product.id} item={product} />
      ))}
    </div>
  )
}

export default About
