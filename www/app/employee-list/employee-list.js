import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

import {EmployeeDetailsPage} from '../employee-details/employee-details';

import * as employeeService from '../services/EmployeeService';

@Page({
    templateUrl: 'app/employee-list/employee-list.html'
})

export class EmployeeListPage {

    constructor(app:IonicApp, nav:NavController, navParams:NavParams) {

        this.nav = nav;

        employeeService.findAll().then(data => this.employees = data);

    }

    search(event, key) {
        employeeService.findByName(event.target.value).then(employees => this.employees = employees);
    }

    itemTapped(event, employee) {

        this.nav.push(EmployeeDetailsPage, {
            employee: employee
        });

    }
}
