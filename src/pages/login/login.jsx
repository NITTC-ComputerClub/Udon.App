import React from 'react'

const Login = props =>(
	<div className="Login_Menu_Main">
  		<h1 className="loginMenu"> Udon </h1>
  		
  		<img src={require("../Udon_icon.jpeg")}/>
  		<a href="./users/authenticate?redirectUri=[hoge]">
  			<div className="loginMenu" onClick="MoveToMainMenu">
  				<h1>LOGIN</h1>
  			</div>
  		</a>
	</div>
	)
export default Login