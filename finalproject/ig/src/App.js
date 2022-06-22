import{ BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./Header";
import Signin from './pages/Signin';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';
import './App.css'

function App()
{
    return(
        <body>
        <BrowserRouter>
            <Header />
            <Switch>
            <Route path="/" exact>
                <Posts />
                </Route>
               <Route path="/signin" exact>
                <Signin />
                </Route> 
                <Route path="/new-post" exact>
                <NewPost />
                </Route>
            </Switch>
        </BrowserRouter>
        </body>
    );
   

}

export default App;