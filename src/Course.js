import React from 'react'

const Part = (props) => {
	return(
		<ul>
			{props.course.part.map(x => <li key={x.id}>{x.name} {x.exercises}</li>)}
		</ul>
	)
}

const Header = (props) => {
	return(
		<h1>{props.course.name}</h1>
	)
}

const Total = (props) => {
	const totalExe = props.course.part.map(x => x.exercises);
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	const total = totalExe.reduce(reducer);
	return(
		
		<p>Number of exercises {total}</p>
	)
}

const Content = (props) => {
	return(
		<div>
			<Part course = {props.course}/>
	  	</div>
	)
}

const Course = (props) => {
	return(
		<div>
			<Header course={props.course}/>
			<Content course={props.course}/>
			<Total course={props.course}/>
		</div>
	)
}

export default Course;