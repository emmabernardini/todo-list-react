import './list.scss';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function List({ tasks, manageCheck, manageDelete }) {
  tasks.sort((taskA, taskB) => taskA.done - taskB.done);
  return (
    <ul className="list">
      {tasks.map((task) => (
        // On met ...task qui passe id=id, label=label etc
        <ListItem key={task.id} {...task} manageCheck={manageCheck} manageDelete={manageDelete} />))}
    </ul>
  );
}

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  manageCheck: PropTypes.func.isRequired,
  manageDelete: PropTypes.func.isRequired,
};

export default List;
