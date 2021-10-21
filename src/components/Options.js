import React from "react";
import Option from "./Option";

class Options extends React.Component{
    render(){
        return (
            <div>
                <div className="widget__header">

                    <h3 className="widget__headerTitle"> Your Options</h3>
                    
                        <button onClick={this.props.handleDeleteOptions}
                            className="button button__link">Remove all</button>
        
                </div>

                <div>
                             {this.props.optionsList.length === 0 && 
                                     <p className="widget__message">Please add an option to get started!</p>}
                    { 
                        this.props.optionsList.map((op,index) => 
                       <Option
                        key={op}
                        optionText={op}
                        count = {index+1}
                        handleDeleteOption={this.props.handleDeleteOption}/>
                            )
                 }   
                </div>
             </div>
        );
    }
}

export default Options;