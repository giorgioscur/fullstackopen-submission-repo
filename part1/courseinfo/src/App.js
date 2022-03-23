const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  );
}

const Content = ({parts, exercises}) => {
  const {part1, part2, part3} = parts;
  const {exercises1, exercises2, exercises3} = exercises;

  return (
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  )
}

const Total = ({total}) => {
  return (
    <p>Number of exercises {total}</p>
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
    <>
      <Header course={course} />
      <Content parts={{ part1, part2, part3 }} exercises={{ exercises1, exercises2, exercises3 }} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  )
}


export default App