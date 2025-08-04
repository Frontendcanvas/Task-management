import { Component, computed, input, output } from '@angular/core';
export interface USER {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  userObj = input<USER>();
  select = output<string>();
  constructor() {}
  ngOnInit() {
    // console.log('user:', this.userObj());
  }

  imgPathSignal = computed(() => 'assets/users/' + this.userObj()?.avatar);
  onSelectUser() {
    this.select.emit(this.userObj()?.id ?? '');
  }
}
