import { Component } from 'react';
import axios from 'axios';
import TableRow from './tableRow.component';
import * as Constants from '../constants';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        axios.get(Constants.apiUri)
            .then(res => {
                this.setState({ employees: res.data });
            })
            .catch((error) => { 
                console.log(error); 
            })
    }

    deleteItem = (id) => {
        const newEmployees = this.state.employees.filter(employee => employee.id !== id);
        this.setState({ employees: newEmployees })
    }

    tableRow = () => {
        return this.state.employees.map( (obj, key) => {
            const pay = (obj.salaryPerAnnum - obj.totalBenefitCostPerAnnum) / 26.0;

            const roundedPay = Math.round(pay * 100) / 100;

            return <TableRow d={this.deleteItem} paycheck={roundedPay} employee={obj} key={key} />
        });
    }

    render() {
        return (
          <div>
            <h2>Employees List</h2>
            <table className="table table-striped table-hover" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Last</th>
                  <th>First</th>
                  <th>Middle</th>
                  <th>Annual Salary</th>
                  <th>Dependents</th>
                  <th>Total Annual Cost</th>
                  <th>Paycheck Estimate</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { this.tableRow() }
              </tbody>
            </table>
          </div>
        );
    }
}