import ItemList from "./itemList";

export default function List({ tasks = [], deleteHandler, checkedTaskHandler}) {
  return (
    <ul style={{margin: '0 auto', width:'80%',paddingLeft:"10px"}}>
      {tasks.map((task) => (
        <ItemList key={task.id} task={task} deleteHandler={deleteHandler} checkedTaskHandler={checkedTaskHandler}/>
      ))}
    </ul>
  );
}
