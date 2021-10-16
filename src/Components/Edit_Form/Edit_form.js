import React ,{Fragment} from 'react'
import './Edit_form.css'

class EditForm extends React.Component {
    state ={
        name:"",
        details: ""
    }

    handleChange =(e) =>{
            this.setState({
                [e.target.id] : e.target.value
            })
    }

    handleSubmit =(e) =>{
        e.preventDefault();
        if(this.state.name !=="" && this.state.details !==""){
            this.props.editsaveEmployee(this.props.index ,this.name.value ,this.details.value );
            e.target.reset();
            document.getElementById("alart").style.display = "none";
            }else{
                document.getElementById("alart").style.display = "block";
            }
    }

    render(){
        return (
           <Fragment>
                <div class="alert alert-danger" id="alart" role="alert">
                The employee Name and Details filds can't be Empty.
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input  className="input_name" ref={(name)=>{this.name = name}} placeholder="Name" id="name" onChange={this.handleChange} defaultValue={this.props.name} /> 
                    <input className=" input_details" ref={(details)=>{this.details = details}}  placeholder="Details" id="details" onChange={this.handleChange} defaultValue={this.props.details} />
                    <button type="submit" className="edit ">Edit</button>
                    <button type="button" className="cancel add mx-2" onClick={this.props.cancelEdit}>Cansel</button>
                </form>
           </Fragment>

        )
    }
}
export default EditForm
