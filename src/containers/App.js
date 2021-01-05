import react from "react";
import CardList from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/errorboundry";


class App extends react.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield:''
        
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response =>  Response.json())
        .then(users => this.setState({robots:users}))
    }

    onsearchchange = (event) => {
        this.setState({searchfield : event.target.value})}

    render(){
        const {robots, searchfield} = this.state;
        const filteredrobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length) {
            return <h1>loading</h1>
        } else {
            return (
                <div className='tc'>
                <h1>Robofriends</h1>
                <Searchbox searchchange={this.onsearchchange} />
                <Scroll>
                <ErrorBoundry>
                <CardList robots={filteredrobots}/>
                </ErrorBoundry>
                </Scroll>
                </div>
            );
            
        }
        
    }
}
export default App;
 