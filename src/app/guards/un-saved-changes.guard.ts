import { CanDeactivateFn } from '@angular/router';
import { AddUserComponent } from '../components/add-user/add-user.component';
import { inject } from '@angular/core';


export interface CanComponentLeave {
  canLeave: () => boolean
}


export const unSavedChangesGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const addUser = inject(AddUserComponent);
  console.log(addUser)
  console.log("2", component)
  if (addUser.canLeave()) {
    console.log("111111111")
    return addUser.canLeave()
  } else {
    console.log("222222222222")
    return true
  }

};
