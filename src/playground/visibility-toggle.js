
// let details = "";

// let visibility = false;
// const onClickToggleButton = () => {
//     visibility = !visibility;
//     renderVisibiltyToggle();
// };

// const onClickToggle = () => {
//     if(details.length){
//         details="";
//     }
//     else{
//         details = "UN announced that half the world will face water problem by the year 2050";

//     }
//     renderVisibiltyToggle();
// };

// //how does the scope of the visibility variable comes inside this arrow function


// const renderVisibiltyToggle = () => {
//    const template = ( <div>
//        <h1>Visibility Toggle App</h1>
//        <button onClick={onClickToggleButton}>{visibility? 'Hide Details':'Show Details'}</button>
//        {visibility && (
//            <div>
//                <p>
//                UN announced that half the world will face water problem by the year 2050
//                </p>

//            </div>
//        )}
//        </div>
//        );
//        ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById('app');

// renderVisibiltyToggle();

class  VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility?'Hide Detials':'Show Details'}</button>
                {this.state.visibility && <p>These are the detials</p>}
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));