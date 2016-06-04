import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import TodoModel from './../../models/todo.ts';

@Component({
  selector: 'todo',
  template: require('./todo.html'),
  styles: [require('./todo.scss').toString()],
})

export class Todo implements OnInit {
  public todos: TodoModel[] = [];
  public input: any;

  constructor() { ; }

  public ngOnInit(): void {
    this.todos.push(
      new TodoModel(1, 'Buy Milk'),
      new TodoModel(2, 'Buy Coffee', true),
      new TodoModel(3, 'Organize Event'),
      new TodoModel(4, 'Go to Barcelona'),
      new TodoModel(5, 'Find Restraut for tody', true)
    );
  }

  public add(title: string): void {
    if (!title) {
      return;
    }
    let maxId = _.maxBy(this.todos, (t) => t.id);
    this.todos.push(new TodoModel((maxId.id + 1), title));
    this.input.value = undefined;
  }

  public toggle(id: number): void {
    let todo = _.find(this.todos, { id: id });
    todo.complete = !todo.complete;
  }

  public remove(id: number): void {
    _.remove(this.todos, (t) => t.id === id);
  }

}
