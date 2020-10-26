import React, { useState , useEffect , useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import queryString from 'query-string';
import 'whatwg-fetch';

const URI = "https://udon.nittc-programming.club/users/authenticate?redirect_uri=https://localhost:3000/callback"
const AUTH_URL = encodeURI(URI);
const TOKEN = "";



const Login = () => {

    return (
        <div className="login_contents">
      <h1 className="loginMenu"> Udon </h1>
      
      <a href={AUTH_URL}>
        <div className="loginMenu" onClick="FetchJson">
          <h1>LOGIN</h1>
        </div>
      </a>
    </div>
    );
}

const Callback = (props) => {
    const code = queryString.parse(props.location.search);
    console.log(code.code);
    fetch('https://udon.nittc-programming.club/users/token', {
        method: 'POST',
        body: JSON.stringfy({
            "code": code.code,
            "redirectUri": "https://localhost:3000/main"
        })
    }).then(response => {
        TOKEN = response.token;
    }).catch(error => {
        console.log(error);
    })
    return (
        <div>
    <p>メインページにリダイレクトします。しばらくお待ちください。</p>
    </div>
    )
}


const PopupMenu = () => {
  const [isShown, setIsShown] = useState(false)
  const popupRef = useRef()
  const documentClickHandler = useRef()
  
  useEffect(() => {
    documentClickHandler.current = e => {
      console.log('documentClickHandler')
      
      if (popupRef.current.contains(e.target)) return

      setIsShown(false)
      removeDocumentClickHandler()
    }
  }, [])
  
  const removeDocumentClickHandler = () => {
    console.log('removeDocumentClickHandler')
    
    document.removeEventListener('click', documentClickHandler.current)
  }
  
  const handleToggleButtonClick = () => {
    console.log('handleToggleButtonClick')
    
    if (isShown) return
    
    setIsShown(true)              
    document.addEventListener('click', documentClickHandler.current)
  }
  
  const handleCloseButtonClick = () => {
    console.log('handleCloseButtonClick')
    
    setIsShown(false)
    removeDocumentClickHandler()
  }
  
  return (
    <div className="popup-menu-container">
      <button onClick={handleToggleButtonClick}>
        Toggle Menu
      </button>
      <div
        className={`popup-menu ${isShown ? 'shown' : ''}`}
        ref={popupRef}
      >
        <div>menu</div>
        <button onClick={handleCloseButtonClick}>
          Close Menu
        </button>
      </div>
    </div> 
  )
}


class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "test"
        };
    }
    renderNav() {
        return (
            <div className="nav">
          <div className="title">
            <h1>Udon</h1>
            <p>{this.props.user_name}</p>
            <p>としてログイン中</p>
          </div>
        <div>
          <ul>
            <li><div>打刻一覧</div></li>
          </ul>
        </div>
          <div className="container">
            <PopupMenu />
          </div>
  </div>
        );
    }
    //usePopupMenuの関数じゃないってエラーを解決する
    renderPunchList() {
        const punchAtTimes = 'hoge'
        const punchClients = 'hoge'
        return (
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
    render() {
        return (
            <div className="content">
            {this.renderNav()}
            <div className="main">
              {this.renderPunchList()}
            </div>
        </div>
        );
    }
}

//また今度コレはクラスに書き換える
function App() {

    return (
        <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/main" exact component={MainMenu}/>
          //ここはあとで消す
          <Route render={(props)=>
          <Route path="/Callback" exact component={Callback}/>
          }/>
        </Switch>
      </Router>
    </div>
    );
}

export default App;