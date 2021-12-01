import "./app-info.css";

const AppInfo = (props) => {
    
    let dateNow = new Date();
    const day = dateNow.getDate();
    const month = dateNow.getMonth() + 1;
    const year = dateNow.getFullYear();

    const {todos} = props;
    const completed = todos.filter(item => item.completed).length;

    return (
        <div className="app-info">
            <h2 id="today">{`Today: ${day}/${month}/${year}`}</h2>
            <h2 id="completed">{`Completed: ${completed}/${todos.length}`}</h2>
            <hr></hr>
        </div>
    )
}

export default AppInfo;