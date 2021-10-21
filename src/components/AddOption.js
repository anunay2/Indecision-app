
import React from 'react';

class Addoption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        //console.log('testing');
        const text = e.target.elements.text.value.trim();
        const error = this.props.handleAddOption(text);


        this.setState(() => ({error : error}));
        setTimeout(() => {
            this.setState(()=> ({ error:undefined}) )
        },1000);

        if(!error){
            e.target.elements.text.value = '';
        }
        // this.setState(() =>{
        //     return {
        //         error : error
        //     };
        // });
    }
    render(){
        return(
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
               <form className ="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option_input" type="text" name="text"/>
                    <button className="button">Add Option</button>
               </form>
            </div>
        );
    }
}

export {Addoption as default};