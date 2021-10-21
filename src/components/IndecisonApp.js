import React from "react";
import Header from "./Header";
import Options from "./Options";
import Addoption from "./AddOption";
import Action from "./Action";
import OptionModal from "./OptionModal";


class IndecisonApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            optionsList: [],
            selectedOption: undefined

        };
    }
    //local storage works only with the the string data
    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({optionsList: options}));
            }
        }
        catch(e){
            //do nothing at all 
        }
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.optionsList.length !== this.state.optionsList.length){
            const json = JSON.stringify(this.state.optionsList);
            localStorage.setItem('options',json);
            //console.log('saving data');

        }
    }
    // componentWillUnmount(){
    //     console.log("Component will unmount");
    // }


    handlePick(){
      const option = this.state.optionsList[Math.floor(Math.random()*this.state.optionsList.length)]
      //updated state function.
        this.setState(()=> ({
            selectedOption : option
        }))
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.optionsList.indexOf(option)>-1){
            return 'this option already exists';
        }
        this.setState((prevState) => ({optionsList :prevState.optionsList.concat([option]) }));
        // this.setState((prevState) => {

        //     return {
        //         optionsList : prevState.optionsList.concat([option]) 
        //     };
        // });
        
    }

    handleDeleteOptions() {
        this.setState(()=> ({optionsList: []}));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption : undefined
        }))
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            optionsList : prevState.optionsList.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }


    render(){
        const title = 'Indecison';
        const subtitle = 'Put your life in the hands of the computer';

        return (
            <div >
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.optionsList.length > 0}
                            handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options optionsList={this.state.optionsList}
                                handleDeleteOptions={this.handleDeleteOptions}
                                handleDeleteOption={this.handleDeleteOption}/>
                        <Addoption handleAddOption={this.handleAddOption} />
                    </div>
                </div>


                 <OptionModal selectedOption={this.state.selectedOption}
                                handleDeleteOption={this.handleDeleteOption}
                                handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        )
    }
}

export default IndecisonApp;