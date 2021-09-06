import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { fadeInRightAnimation } from 'src/@iams/animations/fade-in-right.animation';
import { fadeInUpAnimation } from 'src/@iams/animations/fade-in-up.animation';
import { ListColumn } from 'src/@iams/shared/list/list-column.model';
import { User } from 'src/app/models/user.model';
import { CreateUserComponent } from './create-user/create-user.component';
import { USERS_DEMO_DATA } from './user-demo';

@Component({
  selector: 'iams-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  subject$: ReplaySubject<User[]> = new ReplaySubject<User[]>(1);
  data$: Observable<User[]> = this.subject$.asObservable();
  users: User[];

  isOpen: boolean;

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Image', property: 'image', visible: true },
    { name: 'Name', property: 'name', visible: true, isModelProperty: true },
    {
      name: 'First Name',
      property: 'firstName',
      visible: false,
      isModelProperty: true,
    },
    {
      name: 'Last Name',
      property: 'lastName',
      visible: false,
      isModelProperty: true,
    },
    {
      name: 'Email',
      property: 'email',
      visible: true,
      isModelProperty: true,
    },
    {
      name: 'Role',
      property: 'userRole',
      visible: true,
      isModelProperty: true,
    },
    {
      name: 'Phone',
      property: 'phoneNumber',
      visible: true,
      isModelProperty: true,
    },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<User> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog) {}

  get visibleColumns() {
    return this.columns
      .filter(column => column.visible)
      .map(column => column.property);
  }

  // UPDATING LOCAL ARRAY SIMULATION
  getData() {
    return of(USERS_DEMO_DATA.map(user => new User(user)));
  }

  ngOnInit() {
    this.getData().subscribe(users => {
      this.subject$.next(users);
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter(data => !!data)).subscribe(users => {
      this.users = users;
      this.dataSource.data = users;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createUser() {
    this.dialog
      .open(CreateUserComponent)
      .afterClosed()
      .subscribe((user: User) => {
        if (user) {
          // UPDATING LOCAL ARRAY
          this.users.unshift(new User(user));
          this.subject$.next(this.users);
        }
      });
  }

  updateUser(user) {
    this.dialog
      .open(CreateUserComponent, {
        data: user,
      })
      .afterClosed()
      .subscribe(user => {
        if (user) {
          // UPDATING LOCAL ARRAY
          const index = this.users.findIndex(
            existingCustomer => existingCustomer.id === user.id
          );
          this.users[index] = new User(user);
          this.subject$.next(this.users);
        }
      });
  }

  deleteUser(user) {
    // UPDATING LOCAL ARRAY
    this.users.splice(
      this.users.findIndex(existingCustomer => existingCustomer.id === user.id),
      1
    );
    this.subject$.next(this.users);
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  ngOnDestroy() {}
}
