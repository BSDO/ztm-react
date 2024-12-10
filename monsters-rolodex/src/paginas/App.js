import  {Component} from "react"
import logo from '../logo.svg';
import './App.css';




class App extends Component{

	constructor(){
		super();

		this.state = {
			nome : 'Breno Silva',
			idade : 10,
		}


	}

  	render(){
    
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						{this.state.nome}
						
					</p>
					<p>
						{this.state.idade}
						
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
					
					</a>
					<button onClick={() => {
						this.setState({nome:'Jose das fraãs'})
						this.setState({idade: 30})
					}}>
						Atualizar nome
					</button>
				</header>
			</div>
		);

  	}

  

}

export default App;
