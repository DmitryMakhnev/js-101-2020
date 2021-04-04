import React from 'react';
import { TaskItem } from '../task-item/TaskItem';
import { observer } from 'mobx-react';
import { TodoListModel } from '../../data-model/todo-list-model';
import { TodoController } from '../../controllers/todo.controller';
import { TodosFilterVales } from '../../data-model/todos-filter-vales';

export const Tasks = observer((props: {
  todoListModel: TodoListModel,
  todoController: TodoController,
}) => {
  const {
    todoListModel,
    todoController
  } = props;

  return (
    <section className="todo-app__tasks">
      <ul
        className="todo-app__task-list tasks js-todo-items-list"
        data-test-id="todos-list"
      >
        {todoListModel.items
          .filter(item => {
            switch (todoListModel.currentFilterId) {
              case TodosFilterVales.All:
                return true;
              case TodosFilterVales.Active:
                return !item.isReady;
              case TodosFilterVales.Completed:
                return item.isReady;
            }
          })
          .map(item =>
            <TaskItem
              key={item.id}
              itemModel={item}
              readyChange={isReady => todoController.updateTodo(
                { id: item.id, isDone: isReady }
              )}
              textChange={text => todoController.updateTodo(
                { id: item.id, text: text }
              )}
              remove={() => todoController.removeTodo(item.id)}
            />
          )}
      </ul>
    </section>
  );
});
