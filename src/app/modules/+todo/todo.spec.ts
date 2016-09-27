import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { Todo } from './todo.ts';

describe('TodoComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Todo
  ]}));

  it('should have 5 todos initially', inject([Todo], (todo: Todo) => {
      todo.ngOnInit();

      expect(todo.todos).toBeDefined;
      expect(todo.todos.length).toEqual(5);
    }));
});
