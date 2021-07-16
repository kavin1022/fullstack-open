import React from 'react'

const Part = (props) => {
	debugger
	return(
		<p>{props.part} {props.exercises}</p>
	)
}

const Header = (props) => {
	
	return(
		<h1>{props.course.name}</h1>
	)
}

const Total = (props) => {
	return(
		<p>Number of exercises {props.course.part[0].exercises + props.course.part[1].exercises + props.course.part[2].exercises}</p>
	)
}

const Content = (props) => {
	console.log(props);
	return(
		<div>      
			<Part part = {props.course.part[0].name} exercises = {props.course.part[0].exercises}/>
			<Part part = {props.course.part[1].name} exercises = {props.course.part[1].exercises}/>
			<Part part = {props.course.part[2].name} exercises = {props.course.part[2].exercises}/>
	  	</div>
	)
}

const App = () => {
	const course = {
		name: 'Half Stack application development',
		part: [{name: 'Fundamentals of React',exercises: 10}, {name: 'Using props to pass data',exercises: 7}, {name: 'State of a component',exercises: 14}]
	}

	return (
		<div>
			<Header course = {course}/>
			<Content course={course}/>
			<Total course= {course}/>
		</div>
	)
}

export default App