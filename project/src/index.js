import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import App from "./components/App"
import './index.css';
// import {Switch, Route, NavLink, BrowserRouter} from "../node_modules/react-router-dom"
//import * as serviceWorker from './serviceWorker';
// const myRouter = (
//   <BrowserRouter>
//     <div>
//       <Header/>
   
//    <Switch>
//    <Route exact path="/" component={App}/>
//    </Switch>
//    <div className="tab">
//     <span><NavLink exact  activeStyle={{color: "orange"}} to="/">...</NavLink></span>
//     </div>
//    <Footer/>
//   </div>
//   </BrowserRouter>
// )
ReactDOM.render(
    <div>
<Header />
 <App />
 <Footer />
 </div>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
