import './todo-list-item.css';

const TodoListItem = (props) => {
	
	const {task, onDelete, onToggleImportant, onToggleCompleted, important, completed} = props;

	let classNames = "todo-task";
	if (important) {
		classNames += " important"
	}

	return (
		<li onContextMenu={onToggleImportant}>
			<input 
				type="checkbox" 
				id="checkbox-0"
				checked={completed}
				onChange={onToggleCompleted}
			/>
			<label 
				htmlFor="checkbox-0" 
				className={classNames}>
				{task}
			</label>
			<div 
				className="trash"
				onClick={onDelete}></div>
		</li>
	)
}

export default TodoListItem;
