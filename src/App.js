import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import {
    Button,
    Dialog,
    DialogContent,
    DialogActions

} from '@material-ui/core'

const Login = () => {
  const AUTH_URL = "https://udon.nittc-programming.club/users/authenticate?redirect_uri=localhost:3000/callback";
  return (
    <div>
      <p className="login"> Udon </p>
      <Button href={AUTH_URL} size="large" variant="contained" color="primary">LOGIN</Button>
    </div>
  );
}

const Callback = () => {
  return (
    <div>
      <p>メインページにリダイレクトされます。少々お待ちください。</p>
    </div>
  )
}

class ConfirmationDialog extends React.Component {
  constructor(props) {
    super(props);
  }
  punch() {
    console.log("ok");
    //doSomething
  }
  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          keepMounted
          onBackdropClick={()=>this.props.handleClose()}
        >
          <DialogContent>
            {this.props.msg}
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>this.props.handleClose()} color="primary">キャンセル</Button>
            <Button onClick={()=> this.punch()} color="primary">打刻</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav">
        <h1>Udon</h1>
        <p>{this.props.user_name}</p>
        <p>としてログイン中</p>
        <ul>
          <li><div>打刻一覧</div></li>
        </ul>
        <Button onClick={()=>this.props.btnClickFunc()} variant="contained"color="primary">打刻</Button>
      </div>
    );
  }
}

class MainMenu extends React.Component{
  constructor(props) {
    super(props);
    this.closeDialog=this.closeDialog.bind(this);
    this.state = {
      msg : "打刻します。よろしいですか？",
      user: "test",
      dialog_is_open :  false,
    };
  }
  openDialog(){
    this.setState((state)=>{return{dialog_is_open : true}});
  }
  closeDialog(){
    this.setState((state)=>{return{dialog_is_open : false}});
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
        <NavBar user_name={this.state.user} btnClickFunc={() => this.openDialog()}/>
        <ConfirmationDialog
          open={this.state.dialog_is_open}
          msg={this.state.msg}
          handleClose={this.closeDialog}
          />
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
          <Route path="" exact component={MainMenu}/>
          <Route path="/Callback" exact component={Callback}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;