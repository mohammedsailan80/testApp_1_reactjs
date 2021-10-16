import React ,{Fragment} from 'react'
import './Employee_list.css'

class EmployeeList extends React.Component {

    render(){
       const {employees}=this.props;
       const {deleteEmployee}=this.props;
       const {editEmployee}=this.props;
        return employees.length>0 ? (
           <Fragment>
           {employees.map((employee,index) => {
                return ( 
                    <div key = { index } className="details my-3 pb-0  ">
                <div className="row">
                    <div className="col-3"><img src="assets/images/user.png" alt="user" width="70" height="70" /></div>
                    <div className="col-8 g-1 text"> 
                        <h5><b>{employee.name}</b></h5>
                        <p>{employee.details}</p>
                    </div>
                    <div className="col-1 g-0 buttons_col">
                        <div className="edit">
                            <button onClick={()=>editEmployee(employee.id)}>
                                 <img src="assets/images/edit.png" alt="user" width="23" height="23" />
                            </button>
                        </div>
                        <div className="x-button">
                            <button onClick={()=>deleteEmployee(employee.id)}>
                                <img src="assets/images/x-button.png" alt="user" width="23" height="23" />
                            </button>
                        </div>
                    </div>
                </div>
           </div>
                    )
                    })
                    
                } 
          
           </Fragment>

        ):(
           <Fragment>
                <h1>Oppps!</h1>
                <h4>The employee list is empty.</h4>
            </Fragment>
        );
    }
}
export default EmployeeList
