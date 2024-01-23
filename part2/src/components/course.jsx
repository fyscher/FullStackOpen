const Course = ({course}) => {
    return(
      <>
        <Header key={"head_"+course.id} course={course}/>
        <Content key={"course_"+course.id} course={course} />
        <Sum key={"sum_"+course.id} course={course}/>
      </>
    )
}

// Data
const Header = ({course}) => {
    return <h2>{course.name}</h2>
}
    
const Content = ({course}) => {
    return( 
        <ul>
        {course.parts.map((p)=>{
            return <Part key={p.id} name={p.name} exercises={p.exercises} />
        })}
        </ul>
    )
}

const Part = (prop) => {
    return <p>{prop.name} {prop.exercises}</p>
}

const Sum = ({course}) => {
    const sum = course.parts.reduce((acc, curr) => {
        return acc + curr["exercises"]}, 0)

    return <p>Total: {sum}</p>
}


export default Course
