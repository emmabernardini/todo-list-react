import React from 'react';
import Counter from '../Counter';
import Form from '../Form';
import List from '../List';
import './app.scss';

import dataTasks from '../../data/tasks';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      tasks: dataTasks,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      inputValue: value,
    });
  }

  handleInputSubmit() {
    const { tasks, inputValue } = this.state;
    let newId = 1;
    if (tasks.length) {
      newId = [...tasks].sort((taskA, taskB) => taskB.id - taskA.id)[0].id + 1;
      // const idArray = tasks.map((task) => task.id)
      // newId = Math.max(...idArray) + 1;
    }
    const newTask = {
      id: newId,
      label: inputValue,
      done: false,
    };
    this.setState({
      tasks: [...tasks, newTask],
      // tasks: tasks.concat(newTask),
      inputValue: '',
    });
  }

  handleCheck(id) {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.map((task) => {
        if (task.id === id) {
          task.done = !task.done;
        }
        return task;
      }),
    });
  }

  handleDelete(id) {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter((task) => task.id !== id),
    });
  }

  render() {
    const {
      inputValue,
      tasks,
    } = this.state;

    const counter = tasks.filter((task) => !task.done).length;

    return (
      <div className="app">
        <Form
          value={inputValue}
          manageInputChange={this.handleInputChange}
          manageInputSubmit={this.handleInputSubmit}
        />
        <Counter counter={counter} />
        <List tasks={tasks} manageCheck={this.handleCheck} manageDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
