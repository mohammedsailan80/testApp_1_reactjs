import React  from 'react'
import './App.css';
import AddForm from './Components/Add_Form/Add_form'
import EditForm from './Components/Edit_Form/Edit_form'
import EmployeeList from './Components/Employee_list/Employee_list'
class App extends React.Component {
  state={
    employees:[
      { id:1, name: 'John',details: "I'm from John city"},
      { id:2, name: 'Ali',details: "I'm from Ali university"},
      
    ],
    currentName: "",
    currentDetails: "",
    currentId:'',
    editMode:false
  }

  deleteEmployee = (id) =>{
    let employees= this.state.employees.filter(employee => {
      return employee.id !== id;
    }) 
    this.setState({employees});

    /*let {employees}= this.state;
    let i = employees.findIndex(e => e.id === id);
    employees.splice(i,1);
    this.setState({employees});*/
  }
  editEmployee = (id) =>{
    let {employees}= this.state;
    let i = employees.find(e => e.id === id);
    this.setState({         // copy all other key-value pairs of food object
          editMode: true ,
          currentName:i.name,
          currentId:i.id,
          currentDetails:i.details
    })
  }
  editsaveEmployee =(index ,newName,newDetails) =>{
    this.setState({editMode:false})
    let {employees} = this.state;
    let employee = employees[index-1];
    employee['name'] =newName;
    employee['details'] =newDetails;
    this.setState({employees});
  }

  addEmployee =(employee) =>{
    
    employee.id =this.state.employees.length+1;
    this.setState({editMode:false})
    let employees =this.state.employees;
    employees.push(employee);
    this.setState({employees});
    
  }
  cancelEdit =() =>{
    this.setState({editMode:false})
  }
  
  render(){   
    return (this.state.editMode === false) ? (
      <div className="App">
  
      <h1 className="my-4">The Employee List</h1>
        <AddForm addEmployee ={this.addEmployee}/>
        <EmployeeList employees={this.state.employees}  deleteEmployee={this.deleteEmployee} editEmployee={this.editEmployee}/>
      </div>
    ):<div className="App">
  
    <h1 className="my-4">The Employee List</h1>
      <EditForm index={this.state.currentId} name={this.state.currentName} details={this.state.currentDetails} editsaveEmployee={this.editsaveEmployee} cancelEdit={this.cancelEdit}/>
      <EmployeeList employees={this.state.employees}  deleteEmployee={this.deleteEmployee} editEmployee={this.editEmployee}/>
    </div>
  }
  
}

export default App;
