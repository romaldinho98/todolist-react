import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import TodoAddForm from '../todo-add-form/todo-add-form';
import TodoListArea from '../todo-lists-area/todo-lists-area';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);

		const restored = localStorage.getItem('todos');
		this.state = restored ? JSON.parse(restored) : { todos: [], maxId: 0 };
	}

	addItem = (task) => {
		this.saveState (({todos, maxId}) => {
			const newItem = {
				task,
				important: false,
				completed: false,
				id: maxId + 1
			}
			
			const newArr = [...todos, newItem];
			return {
				todos: newArr,
				maxId: maxId + 1
			}
		})
	}

	saveState = (state) => {
		this.setState(state, () => {
			localStorage.setItem('todos', JSON.stringify(this.state));
		});
	}

	deleteItem = (id) => {
		this.saveState(({todos}) => {
			return {
				todos: todos.filter(item => item.id !== id) 
			}
		})
	}

	onToggleImportant = (id) => {
		this.saveState(({todos}) => ({
			todos: todos.map(item => {
				if (item.id === id) {
					return {...item, important: !item.important}
				}
				return item;
			})
		}))
	}

	onToggleCompleted = (id) => {
		this.saveState(({todos}) => ({
			todos: todos.map(item => {
				if (item.id === id) {
					return {...item, completed: !item.completed}
				}
				return item;
			})
		}))
	}

	render() {
		return (
			<div className="app">
				<AppInfo todos={this.state.todos}/>
				<TodoAddForm onAdd={this.addItem} />
				<TodoListArea
					todos={this.state.todos} 
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleCompleted={this.onToggleCompleted}/>
			</div>
		)
	}
}

export default App;
