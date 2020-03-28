import React, { Component } from "react";
import CompletedList from "./CompletedList";
import TodoList from "./TodoList";

class TaskManager extends Component {
  constructor(props) {
    super(props);

    state = {};
  }

  render() {
    return (
      <div className="manager">
        <div className="todoList">
          <TodoList />
        </div>
        <div className="completedList">
          <CompletedList />
        </div>
      </div>
    );
  }
}

export default TaskManager;
