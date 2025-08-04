import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { log } from 'console';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // // this we use whe for stste management  traditional zone.js is used
  // / zone.js wayway
  // selectedUser = DUMMY_USERS[randomIndex];
  //with the getter method it will always check the dom which will effect efficiency
  get imagePath() {
    //Its a method inside of a class that useable like  property 😊
    //  and does not need to be called explicitlyand it return a new value
    return 'assets/users/' + this.selectedUser().avatar;
  }
  // ✔ signal way
  // 2nd way to use signal ..it almost as subject
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  /// with computed we it will checked when the
  // signalit triggertd and will return a signal.so it more efficient way.
  signalImagePath = computed(
    () => 'assets/users/' + this.selectedUser().avatar
  );

  onSelectUser() {
    //its an naming convention to start method which will be executed on click it starts with on
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // console.log('clicked', this.selectedUser);
  }
}
