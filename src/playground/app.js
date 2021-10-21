// stateless functional components

class IndecisonApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            optionsList: []

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
        if(prevState.optionsList.length != this.state.optionsList.length){
            const json = JSON.stringify(this.state.optionsList);
            localStorage.setItem('options',json);
            console.log('saving data');

        }
    }
    componentWillUnmount(){
        console.log("Component will unmount");
    }


    handlePick(){
      alert(this.state.optionsList[Math.floor(Math.random()*this.state.optionsList.length)])
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

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            optionsList : prevState.optionsList.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    render(){
        const title = 'Indecison';
        const subtitle = 'Put your life in the lands of the computer';

        return (
            <div >
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.optionsList.length > 0}
                           handlePick={this.handlePick}/>
                <Options optionsList={this.state.optionsList}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}/>
                <Addoption handleAddOption={this.handleAddOption} />
            
            </div>
        )
    }
}
const obj = {
    name : 'Vikram',
    getName() {
        return this.name;
    }
};

//context doesn't get transferred..
const getName = obj.getName.bind({name : 'Andrew'});

console.log(getName());

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

Header.defaultProps = {
    title : 'some default!'
}


// class Header extends React.Component{
//     render(){
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

class Options extends React.Component{
    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
            { 
               this.props.optionsList.map((op) => 
                       <Option
                        key={op}
                        optionText={op}
                        handleDeleteOption={this.props.handleDeleteOption}/>
                            )
            }
            </div>
        );
    }
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}

            {props.optionText.length === 0 && <p>Please add an option to get started!</p>}

            <button onClick={
                (e)=>{ props.handleDeleteOption(props.optionText)}}>
                    Remove
            </button>
        </div>
     );
}


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
        const text = e.target.elements.text.value.trim();
        const error = this.props.handleAddOption(text);


        this.setState(() => ({error : error}));
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
                {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.handleAddOption}>
                    <input type="text" name="text"/>
                    <button>Add Option</button>
               </form>
            </div>
        );
    }
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
             disabled={!props.hasOptions}>
                 What should I do?
            </button>
            
        </div>
    );
};

// class Action extends React.Component {
 
   
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
                
//             </div>
//         );
//     }
// }

// const User =  (props)=> {
//     return (<div>
//         <p>
//             Name: {props.name}
//         </p>
//         <p>
//             Age:  {props.age}
//         </p>
//     </div>
//     );
// };





ReactDOM.render(<IndecisonApp/>, document.getElementById('app'));