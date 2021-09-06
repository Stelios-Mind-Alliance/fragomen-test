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
import { Admin } from './create-admin/admin.model';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { ADMINS_DEMO_DATA } from './super-admin.demo';

@Component({
  selector: 'iams-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation],
})
export class SuperAdminComponent implements OnInit, AfterViewInit, OnDestroy {
  subject$: ReplaySubject<Admin[]> = new ReplaySubject<Admin[]>(1);
  data$: Observable<Admin[]> = this.subject$.asObservable();
  admins: Admin[];

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
  dataSource: MatTableDataSource<Admin> | null;

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
    return of(ADMINS_DEMO_DATA.map(admin => new Admin(admin)));
  }

  ngOnInit() {
    this.getData().subscribe(admins => {
      this.subject$.next(admins);
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter(data => !!data)).subscribe(admins => {
      this.admins = admins;
      this.dataSource.data = admins;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createAdmin() {
    this.dialog
      .open(CreateAdminComponent)
      .afterClosed()
      .subscribe((admin: Admin) => {
        if (admin) {
          // UPDATING LOCAL ARRAY
          this.admins.unshift(new Admin(admin));
          this.subject$.next(this.admins);
        }
      });
  }

  updateAdmin(admin) {
    this.dialog
      .open(CreateAdminComponent, {
        data: admin,
      })
      .afterClosed()
      .subscribe(admin => {
        if (admin) {
          // UPDATING LOCAL ARRAY
          const index = this.admins.findIndex(
            existingCustomer => existingCustomer.id === admin.id
          );
          this.admins[index] = new Admin(admin);
          this.subject$.next(this.admins);
        }
      });
  }

  deleteAdmin(admin) {
    // UPDATING LOCAL ARRAY
    this.admins.splice(
      this.admins.findIndex(
        existingCustomer => existingCustomer.id === admin.id
      ),
      1
    );
    this.subject$.next(this.admins);
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  ngOnDestroy() {}
}
