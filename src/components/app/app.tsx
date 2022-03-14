import style from './app.module.css';
import {Header} from '../header/header';
import {Main} from '../Main/main';
import {Footer} from '../footer/footer'
import {Navigation} from '../navigation/navigation';
import {Dialog} from '../dialog/dialog';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {WithCompose} from "../profile/profile_container";
import {WithUrlDataUsers} from "../users/user_container";
import {LoginModal} from "../login/loginModal";
import { witchConnect} from "../Main/main_container";
import {TestFormLogin} from "../testFormLogin/test_form_login";


function App() {

    return (
        <Router>
            <div className={style.wrapper}>
                <Header/>
                <div className={style.app_wrapper}>
                    <Navigation/>
                    <Route path='/main' component={witchConnect}/>
                    <Route path='/profile/:userId' component={WithCompose}/>
                    <Route exact path='/news' component={Dialog}/>
                    <Route exact path='/music' component={Dialog}/>
                    <Route exact path='/settings' component={Dialog}/>
                    <Route exact path='/message' component={Dialog}/>
                    <Route path='/users/:page' component={WithUrlDataUsers}/>
                    <Route path='/login' component={LoginModal}/>
                    <Route path='/test' component={TestFormLogin}/>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
