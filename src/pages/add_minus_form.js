import React ,{Fragment} from 'react'
import './add_minus_form.css'

class AddandMinus extends React.Component {

    state={
        number:0
    }
    handleclickAdd =(e)=>{
        e.preventDefault();
        this.setState({number:this.state.number +1});
    }
    handleclickMinus =(e)=>{
        e.preventDefault();
        this.setState({number:this.state.number -1});
    }
    render(){
        return (
           <Fragment>
            <div className="card">
                    <form>
                        <input value={this.state.number}  disabled/>
                        <button onClick={this.handleclickAdd}>Add +1</button>
                        <button onClick={this.handleclickMinus}>Minus -1</button>
                    </form>
            </div>

           </Fragment>

        )
    }
}
export default AddandMinus
