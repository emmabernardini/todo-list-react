import PropTypes from 'prop-types';

function ListItem({
  id,
  label,
  done,
  manageCheck,
  manageDelete,
}) {
  return (
    <li className="list-item">
      <label className={done ? 'list-item--done' : ''} htmlFor={`task-${id}`}>
        <input
          type="checkbox"
          className="checkbox"
          id={`task-${id}`}
          checked={done}
          onChange={() => {
            manageCheck(id);
          }}
        />
        {label}
      </label>
      <button
        className="button"
        type="button"
        onClick={() => {
          manageDelete(id);
        }}
      >X
      </button>
    </li>
  );
}

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  manageCheck: PropTypes.func.isRequired,
  manageDelete: PropTypes.func.isRequired,
};

export default ListItem;
