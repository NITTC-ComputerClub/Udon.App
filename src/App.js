import React from 'react';
import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

//import Login from './pages/login/login.component'
//import MainMenu from './pages/main-menu/main-menu.component'

const Login =()=>{
  function FetchJson(){
    fetch("https://udon.app/ca")
  }
  return(
    <div className="login_contents">
      <h1 className="loginMenu"> Udon </h1>
      
      <img className="icon" src={require("./Udon_icon.png")}/>
      <a href="https://udon.nittc-programming.club/users/authenticate?redirect_uri=https://udon.app/callback">
        <div className="loginMenu" onClick="FetchJson">
          <h1>LOGIN</h1>
        </div>
      </a>
    </div>
    );
}

class MainMenu extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
          user_name: "test"
        };
    }
    renderNav(){
      return(
        <div className="nav">
        <h1>Udon</h1>
        <p>{this.props.user_name}</p>
        <p>としてログイン中</p>
        <ul>
          <li><div>打刻一覧</div></li>
        </ul>
        <div className="punch"><h1>打刻</h1></div>
      </div>
      );
    }
    renderPunchList(){
      const punchAtTimes='hoge'
      const punchClients= 'hoge'
      return(
        <div className="punchlist">
          <ul className="punchlist">
          <li>created at</li>
          {punchAtTimes}
          </ul>
          <ul className="punchlist">
          <li>client</li>
          {punchClients}
          </ul>
        </div>
      );
    }
  render(){
    return(
      <div className="content">
            {this.renderNav()}
            <div className="main">
              {this.renderPunchList()}
            </div>
        </div>
      );
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/main" exact component={MainMenu}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
