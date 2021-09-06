export class Admin {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  userRole: string;
  phoneNumber: number;

  constructor(admin) {
    this.id = admin.id;
    this.firstName = admin.firstName;
    this.lastName = admin.lastName;
    this.email = admin.email;
    this.userRole = admin.userRole;
    this.phoneNumber = admin.phoneNumber;
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
