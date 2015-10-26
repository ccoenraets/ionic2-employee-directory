import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

import * as employeeService from '../services/EmployeeService';

@Page({
    templateUrl: 'app/employee-details/employee-details.html'
})

export class EmployeeDetailsPage {

    constructor(app:IonicApp, nav:NavController, navParams:NavParams) {
        this.nav = nav;
        // If we navigated to this page, we will have an item available as a nav param
        this.employee = navParams.get('employee');
    }

    viewManager(event, managerId) {

        employeeService.findById(managerId).then(employee =>
            this.nav.push(EmployeeDetailsPage, {
                employee: employee
            })
        );

    }


}