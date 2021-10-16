import React ,{Fragment} from 'react'
import './Add_form.css'

class AddForm extends React.Component {
    state ={
        name:'',
        details: ''
    }

    handleChange =(e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit =(e) =>{
        e.preventDefault();
        if(this.state.name !=="" && this.state.details !==""){
        this.props.addEmployee(this.state);
        e.target.reset();
        this.setState({
            name : '' ,details:''
        })
        document.getElementById("alart").style.display = "none";
        }else{
            document.getElementById("alart").style.display = "block";
          }
        
    }

    render(){
        return (
           <Fragment>
                <div class="alert alert-danger" id="alart" role="alert">
                The employee Name and Details filds is requaired.
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input  className="input_name" placeholder="Name" id="name" onChange={this.handleChange}  />
                    <input className=" input_details "  placeholder="Details" id="details" onChange={this.handleChange}  />
                    <button type="submit" className="add">Save</button>
                </form>
           </Fragment>

        )
    }
}
export default AddForm
