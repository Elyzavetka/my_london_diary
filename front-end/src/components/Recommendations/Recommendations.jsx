import Todo from "./Todo";
import styles from './Recommendations.module.css'

const Recomendations = ({ todos, deleteTodo, toggleTodo }) => {

  console.log("todos ===>",todos)
  return (
    <div className={styles.todoListContainer}>
      {todos.length > 0 ? (todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)) : (<h2>there is no todo</h2>)}
    </div>
  )
}

export default Recomendations;