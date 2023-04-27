import './counter.scss';
import PropTypes from 'prop-types';

function Counter({ counter }) {
  return (
    <p className="counter">{counter} {counter > 1 ? 'tâches en cours' : 'tâche en cours'}</p>
  );
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Counter;
