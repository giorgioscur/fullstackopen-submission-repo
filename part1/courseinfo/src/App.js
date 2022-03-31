const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  );
}

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

const Content = ({ parts }) => {
  const { part1, part2, part3 } = parts;

  return (
    <div>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
    </div>
  )
}

const Total = ({ total }) => {
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <>
      <Header course={course} />
      <Content parts={{ part1, part2, part3 }} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}


export default App