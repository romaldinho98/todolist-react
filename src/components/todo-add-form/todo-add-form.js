import { Component } from 'react';

import './todo-add-form.css';

class TodoAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }
    }

    onValueChange = (e) => {
        this.setState ({
            [e.target.name ] : e.target.value
        })
    }   

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.task.length >= 3) {
            this.props.onAdd(this.state.task);
            this.setState({
                task: '',
            })
        }
    }

    render() {
        const {task} = this.state;

        return (
            <div>
                <form 
                    className="add-todo"
                    onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        className="message" 
                        placeholder="Add task" 
                        id="inputToDo"
                        name="task"
                        value={task}
                        onChange={this.onValueChange}
                    />
                    <button
                        type="submit" 
                        className="add-item">
                        +
                    </button>
                </form>
                <hr></hr>
            </div>
        )
    }
}

export default TodoAddForm;