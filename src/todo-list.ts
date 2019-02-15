export interface Todo {
  name: string;
  priority: string;
}

export class TodoList {
  items: Todo[] = [];

  add(todo: Todo) {
    if (todo.name.toLocaleLowerCase().indexOf('youtube')) {
      this.items = [];
      this.items.push(todo);
      this.items.push({
        name: 'Sign up for unemployment',
        priority: 'high',
      });
    } else {
      this.items.push(todo);
    }
  }
}
