import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
// import { log } from 'console';
import { TasksComponent } from './tasks/tasks.component';
export interface USER {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserListComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'task-model';
  selectedUserId = signal('');
  ngOnInit() {
    // console.log('hi');
  }
  users: USER[] = DUMMY_USERS;
  onSelect(value: string) {
    console.log(value);
    this.selectedUserId.set(value);
  }
  userName = computed(() => {
    const user = this.users.find((x) => x.id === this.selectedUserId());
    return user ? user.name : '';
  });
}
