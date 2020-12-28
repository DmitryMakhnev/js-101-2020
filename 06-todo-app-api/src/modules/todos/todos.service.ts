import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';
import { TodoModel } from './todo.model';
import { nanoid } from 'nanoid';
import { DeleteTodoDto } from './dtos/delete-todo.dto';

type TodoRecord = {
  userId: string,
  todo: TodoModel,
}

const mockTodosTable: TodoRecord[] = [];

@Injectable()
export class TodosService {

  async getAll(userId: string) {
    return mockTodosTable.filter(record => record.userId === userId).map(record => record.todo);
  }

  async create(userId: string, data: CreateTodoDto) {
    const todo: TodoModel = {
      id: nanoid(32),
      text: data.text,
      isDone: data.isDone || false,
    };

    mockTodosTable.push({
      userId,
      todo,
    });

    return todo;
  }

  async update(userId: string, data: UpdateTodoDto) {
    const record = mockTodosTable.find(record => record.userId === userId && record.todo.id === data.id);
    if (!record) {
      throw new Error('NotFound');
    }
    const newTodo = {
      ...record.todo,
      ...data
    };

    record.todo = newTodo;
    return newTodo;
  }

  async delete(userId: string, data: DeleteTodoDto) {
    const recordIndex = mockTodosTable.findIndex(record => record.userId === userId && record.todo.id === data.id);

    if (recordIndex === -1) {
      throw new Error('NotFound');
    }

    mockTodosTable.splice(recordIndex, 1);
  }

}
