import './form.scss';
import PropTypes from 'prop-types';

function Form({ value, manageInputChange, manageInputSubmit }) {
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        manageInputSubmit();
      }}
    >
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        value={value}
        onChange={(event) => {
          manageInputChange(event.target.value);
        }}
      />
    </form>
  );
}

Form.propTypes = {
  value: PropTypes.string.isRequired,
  manageInputChange: PropTypes.func.isRequired,
  manageInputSubmit: PropTypes.func.isRequired,
};

export default Form;
