import './App.css'
import Pre from './Pre.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Info from './Info/Info';


function App() {
  

  return (
    <div className='App'>
    <Router>
      <div>
          <ul>
            <li className="active"  ><Link className='link' to='/takshila-e-commerce' > LOGO </Link> </li>
            <li style={{ flex:1 }} ></li>
            <li><Link className='link' to='/takshila-e-commerce/stage' > Search</Link></li>
            <li><Link className='link' to='/takshila-e-commerce/stage' > Login </Link></li>
          </ul>

      </div>

      <Switch>
        <Route exact path='/takshila-e-commerce' component={Pre}></Route>
        <Route path='/takshila-e-commerce/stage' component={Info} ></Route>
      </Switch>

    </Router>
    



    </div>
    
  )
    
}

export default App;
