import React, { useState } from 'react'
import PersonForm from './PersonForm'
import Numbers from './Numbers'
import Filter from './Filter'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' }
	]);
	
	const [filter, setFilter] = useState("");
	const [filteredList, setFilteredList] = useState([]);

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter persons = {persons} filter = {filter} setFilter = {setFilter} setFilteredList = {setFilteredList}/>

			<h2>add new</h2>
			<PersonForm persons = {persons} setPersons ={setPersons}/>

			<h2>Numbers</h2>
			<Numbers persons = {persons} filter = {filter} filteredList = {filteredList}/>
		</div>
	)
}

export default App