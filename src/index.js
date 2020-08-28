import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Main_Menu extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
        	user_name: "test"
        };
    }
    renderNav(){
    	return(
    		<div class ="nav">
				<h1>Udon</h1>
				<p>{this.props.user_name}</p>
				<p>としてログイン中</p>
				<ul>
					<li><div>打刻一覧</div></li>
				</ul>
				<div class="punch"><h1>打刻</h1></div>
			</div>
    	);
    }
    renderPunchList(){
    	const punchAtTimes='hoge'
    	const punchClients= 'hoge'
    	return(
    		<div class="punchlist">
    			<ul>
    			<li>created at</li>
    			{punchAtTimes}
    			</ul>
    			<ul>
    			<li>client</li>
    			{punchClients}
    			</ul>
    		</div>
    	);
    }
	render(){
		return(
			<div class="content">
        		{this.renderNav()}
        		<div class="main">
        			{this.renderPunchList()}
        		</div>
    		</div>
    	);
	}
}
/*-------Login_Menu--------
class Login_Menu extends React.Component {

    render() {
    	const BASE_URL = "https://api.udon.app";
    	const redirectUri = "hoge";

      	return (
        	<div className="Login_Menu_Main">
          		<h1 className="loginMenu"> Udon </h1>
          		
          		<img src={require("./Udon_icon.jpeg")}/>
          		<a href="./users/authenticate?redirectUri=[hoge]"><div className="loginMenu" onClick="MoveToMainMenu"><h1>LOGIN</h1></div></a>
        	</div>
        );
    }
}
*/
// ========================================

ReactDOM.render(
    <App />,
    //<Main_Menu />,
    document.getElementById('root')
);
serviceWorker.unregister();
