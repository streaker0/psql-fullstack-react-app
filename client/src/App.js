import React ,{Component} from 'react'
import './App.css';
import axios from 'axios'

class App extends Component{
	state ={
		hello:null
	}
	componentDidMount(){
		axios.get('/hello')
		.then(res=>this.setState({hello: res.data}))
		.catch(err=>console.log(err))

	}
	// adding comments for comments
	render(){
		return(
			<div>
				{this.state.hello && <div>{this.state.hello}</div>}
			</div>
		)
	}
}

export default App;
