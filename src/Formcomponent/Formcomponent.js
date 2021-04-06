import React, {Component} from 'react'
import css from './Formcomponent.module.css'

class Formcomponent extends Component{

    nameChanged(event){
        console.log(event.target.value);
    }

    formSubmit(event){
        event.preventDefault();
        alert("formm submited");
    }


    render(){
        return (<form className={css.form} onSubmit={this.formSubmit}>
            <input type='text' onChange={this.nameChanged}/>
            <button>SUBMIT</button>
        </form>);
    }
}

export default Formcomponent;