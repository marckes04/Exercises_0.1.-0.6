
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);


  return (
    <div>
    <Header course = {course}/>
    
      <ol>
        {parts.map(part => (
          <li key={part.name}>
            {part.name} - {part.exercises} Excercises.
          </li>
        ))}
      </ol>
      <p>Total exercises: {totalExercises}</p>
      


    </div>
  )
}
export default App