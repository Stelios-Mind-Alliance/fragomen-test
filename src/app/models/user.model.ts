export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  userRole: string;
  phoneNumber: number;

  constructor(user) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.userRole = user.userRole;
    this.phoneNumber = user.phoneNumber;
  }

  get name() {
    let name = '';

    if (this.firstName && this.lastName) {
      name = this.firstName + ' ' + this.lastName;
    } else if (this.firstName) {
      name = this.firstName;
    } else if (this.lastName) {
      name = this.lastName;
    }

    return name;
  }

  set name(value) {}
}
