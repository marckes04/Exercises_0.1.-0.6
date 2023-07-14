
const Header = (props) =>
{
  console.log(props)
  return(
    <div>
      <p>
        Welcome everybody! this is {props.course} course
      </p>
    </div>
  )
}

const Content = (props) =>
{
  console.log(props)
  return(
    <div>
      <p>The content of the course is</p>
      
        <p>1. {props.part1} with {props.exercises1} problems to solve.</p>
        <p>2. {props.part2} with {props.exercises2} problems to solve.</p>
        <p>3. {props.part3} with {props.exercises3} problems to solve.</p>
    

    </div>
  )
} 


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <p>
      <Content part1={part1}
      exercises1 = {exercises1} 
      part2 = {part2} 
      exercises2 = {exercises2} 
      part3 = {part3} 
      exercises3 = {exercises3} />
    
        Number of exercises = {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App