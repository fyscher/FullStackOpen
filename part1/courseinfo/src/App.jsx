const Header = (prop) =>
	{
		console.log(prop)
		return(
			<>
				<h1>{prop.course.name}</h1> 
			</>
		)
	}
	
const Content = (prop) =>
{
	console.log(prop)
	return(
		<>
			<Part name={prop.course.parts[0].name} exercises={prop.course.parts[0].exercises}/>
			<Part name={prop.course.parts[1].name} exercises={prop.course.parts[1].exercises}/>
			<Part name={prop.course.parts[2].name} exercises={prop.course.parts[2].exercises}/>
		</>
	)
}

const Part = (part) =>
{
	console.log(part)
	return(
		<p>{part.name}</p>
	)
}

const Total = (prop) =>
{
	console.log(prop)
	return(
		<p>Number of exercises {prop.course.parts[0].exercises + prop.course.parts[1].exercises + prop.course.parts[2].exercises}</p>
	)
}

const App = () => 
{
	const course = {
		name: 'Half Stack application development',
		parts: [
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
	}

	return(
		<>
			<Header  course={course}/>
			<Content course={course}/>
			<Total   course={course}/>
		</>
	)
}

export default App