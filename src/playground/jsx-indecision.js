
console.log("Hello from ANDREW!")
const app ={
    title:" Indecision App",
    subtitle: "Put your life in the hands of computer!",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderOptionsApp();
}

const onRemoveButton = () => {
   

    app.options = [];
    renderOptionsApp();
}

const onMakeDecision = () => {
    const randomNum =  Math.floor(Math.random() *app.options.length);
    const option = app.options[randomNum];
    console.log(option);
    alert(option);
};

const numbers = [55,101,100001];

const renderOptionsApp = () =>{
    
    const template = (
        <div>
            <h1>
                {app.title}
            </h1>
            {app.subtitle && <p>{app.subtitle}</p>}
    
            <p>
                {app.options.length>0 ? 'Here are your options':'No Options'}
            </p>
            <button disabled={app.options.length<=0} onClick={onRemoveButton}>Remove All</button>
            <button onClick={onMakeDecision}>What should I do?</button>
            <p>{app.options.length}</p>
            <ol>
            { 
               app.options.map((option) => {
                        return <li key={option}> {option}</li>;
                })
            }
    
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name ="option"/>
                <button>Add Option</button>
            </form>
        </div>);

        ReactDOM.render(template, appRoot);
    };



const appRoot = document.getElementById('app');

renderOptionsApp();