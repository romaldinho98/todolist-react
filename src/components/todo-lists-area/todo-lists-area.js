import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list-area.css';

const TodoListArea = ({todos, onDelete, onToggleImportant, onToggleCompleted}) => {

    // перебор элементов из массива и создание нового массива
    const elements = todos.map(item => {
        const {id, ...itemProps} = item;
        //вытаскиваю id из props
        return (
            <TodoListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleImportant={(e) => onToggleImportant(id, e.preventDefault())}
                onToggleCompleted={() => onToggleCompleted(id)}
            />
        )
    })

    return (
        <ul className="todo-list" id="checklist">
            {elements}
        </ul>
    )
}

export default TodoListArea;