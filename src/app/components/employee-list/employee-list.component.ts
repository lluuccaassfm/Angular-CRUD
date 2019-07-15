import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee, EmployeeService} from '../../services/employee.service';
import {EmployeeNewModalComponent} from '../employee-new-modal/employee-new-modal.component';
import {EmployeeEditModalComponent} from '../employee-edit-modal/employee-edit-modal.component';
import {EmployeeDeleteModalComponent} from '../employee-delete-modal/employee-delete-modal.component';


@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    employee: Employee;
    showMessageSuccess = false;
    employeeToEdit: Employee;
    employeeToDelete: Employee;
    data = '2018-05-05';
    @ViewChild(EmployeeNewModalComponent) //pegar uma referencia de um elemento
    employeeNewModal: EmployeeNewModalComponent;

    @ViewChild(EmployeeEditModalComponent) //pegar uma referencia de um elemento
    employeeEditModal: EmployeeEditModalComponent;

    @ViewChild(EmployeeDeleteModalComponent) //pegar uma referencia de um elemento
    employeeDeleteModal: EmployeeDeleteModalComponent;

    constructor(public employeeService: EmployeeService) {
    }

    ngOnInit() {
    }

    openNewModal() {
        this.employeeNewModal.show();
    }

    openEditModal(employee: Employee) {
        this.employeeToEdit = employee;
        this.employeeEditModal.show();
    }

    openDestroyModal(employee: Employee) {
        this.employeeToDelete = employee;
        this.employeeDeleteModal.show();
    }

    onNewEmployee(employee: Employee) {
        this.employee = employee;
        this.showMessageSuccess = true;
    }

    onEditEmployee(employee: Employee) {
        console.log(employee);
    }

    onDestroyEmployee(employee: Employee) {
        console.log(employee);
    }

    fechou($event){
        console.log($event);
    }
}
