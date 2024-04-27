import propTypes from "prop-types";

function Note(props) {
  console.log(props.TaskTable);
  const newTask = props.TaskTable.map((currentTask, key) => (
    <tr key={key}>
      <td key={`${key}_taskID`}>{key + 1}</td>
      <td key={key}>{currentTask.Task}</td>
    </tr>
  ));
  return <tbody>{newTask}</tbody>;
}

Note.propTypes = propTypes.array;

export default Note;
