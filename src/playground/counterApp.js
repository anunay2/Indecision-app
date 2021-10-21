// console.log("App.js is running");

// //Data dynamically coming inside
// //if statements 
// //ternary operators
// //logical operators

// //only render subtite (and p tag) if website mixed - logical and operator
// // render new p tag - if



// const user = {
//     name: 'Andrew',
//     age : 44,
//     location: "New Delhi"
// };

// const app ={
//     title:"Chin Chin",
//     subtitle: "Chacha",
//     options: ['One,Two']
// };

// const template = (
//     <div>
//         <h1>
//             {app.title}
//         </h1>
//         {app.subtitle && <p>{app.subtitle}</p>}

//         <p>
//             {app.options.length>0 ? 'Here are your options':'No Options'}
//         </p>
//         <ol>
//             <li> {app.options[0]}</li>
//             <li>{app.options[1]}</li>

//         </ol>
//     </div>);

// function getLocation(location){
//     if(location){
//         return <p>Location : {location}</p>;
//     }
// }

// const template2 = (
//         <div>
//             {/* any javascript variable */}
//             <h1>
//                 {undefined}
//                 {null}
//                 {false}
//                 {true}
//                {user.name ? user.name : 'Anonymous'}
//             </h1>
//                 {user.age>=18 && <p>Age: {user.age}</p>}
//             <p>
//                 age: {user.age}
//             </p>
//             {getLocation(user.location)}
//         </div>
//     );


// //JSX doesn't have data binding
// let count = 0;
// const addOne = () => {
//     count+=1;
//     renderCounterApp();
// }
// const subOne = () => {
   
//     count-=1;
//     renderCounterApp();

// }
// const  reset = () => {
//     count = 0;
//     renderCounterApp();

// }

// const someId = "my-id"
// const template3 = (<div>
//     <h1>Count: {count}</h1>
//     <button onClick={ addOne} className="button1">+1</button>
//     <button onClick = {subOne}>-1</button>
//     <button onClick= {reset}>Reset</button>
//     </div>);


// console.log(template3);


// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const template3 = (<div>
//         <h1>Count: {count}</h1>
//         <button onClick={ addOne} className="button1">+1</button>
//         <button onClick = {subOne}>-1</button>
//         <button onClick= {reset}>Reset</button>
//     </div>);
//     ReactDOM.render(template3, appRoot);
// };

// renderCounterApp();

// //babel is the javascript compiler.Preset is the group of plugin

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubOne = this.handleSubOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //defining the state
        this.state = {
            count : props.count
        }
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }
    handleAddOne(){
        //state object in the previous state
        //provide state only what you need.
        this.setState((prevState)=>{
            return {
                count:prevState.count+1
            };
        });
        console.log(this.state.count);
    }
    handleSubOne(){

        this.setState((prevState) =>{
            return {
                count: prevState.count -1
            };
        });
        console.log('Sub 1');
    }
    handleReset(){
        this.setState(() =>{
            return {
                count: 0
            };
        });
        console.log('Reset');
        //this setState is asynchronous
        
        // this.setState({
        //     count:0
        // });
        // this.setState({
        //     count : this.state.count + 1
        // });
        this.setState((prevState) =>{
            return {
                count: prevState.count +1
            };
        });
        console.log('Reset');
    }
    render(){
        return(
            <div>
                <h1>
                 Count:{this.state.count}   
                </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>

            </div>
        );
    }
}

Counter.defaultProps = {
    count : 100
};
ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));

