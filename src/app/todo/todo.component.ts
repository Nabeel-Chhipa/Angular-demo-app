import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  list:any[] = []
  addTask(task:string) {
    this.list.push({id:this.list.length, name: task})
    console.log('data', this.list)
  }
  removeTask(id:number) {
    this.list = this.list.filter(item => item.id !== id)
    console.log('updated data', this.list)
  }
}
