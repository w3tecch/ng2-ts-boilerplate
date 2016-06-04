import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

import * as _ from 'lodash';

import TodoModel from './../../models/todo.ts';

@Component({
  selector: 'todo',
  template: require('./todo.html'),
  styles: [require('./todo.scss').toString()],
  pipes: [ TranslatePipe ]
})

export class Todo implements OnInit {
  public todos: TodoModel[] = [];
  public input: string;

  constructor() { ; }

  public ngOnInit(): Promise<boolean> {
    this.todos.push(
      new TodoModel(1, 'Buy Milk'),
      new TodoModel(2, 'Buy Coffee', true),
      new TodoModel(3, 'Organize Event'),
      new TodoModel(4, 'Go to Barcelona'),
      new TodoModel(5, 'Find Restraut for tody', true)
    );

    return new Promise((resolve, reject) => resolve(true));
  }

  public add(): void {
    if (!this.input) {
      return;
    }
    let maxId = _.maxBy(this.todos, (t) => t.id);
    this.todos.unshift(new TodoModel((maxId.id + 1), this.input));
    this.input = undefined;
  }

  public toggle(id: number): void {
    let todo = _.find(this.todos, { id: id });
    todo.complete = !todo.complete;
  }

  public remove(id: number): void {
    _.remove(this.todos, (t) => t.id === id);
  }

}
