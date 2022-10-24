import { AllMeetUps } from './pages/AllMeetUps';

import { Route, Switch } from 'react-router-dom';
import { Favorite } from './pages/Favorite';
import { NewMeetUps } from './pages/NewMeetUps';
import { Error404 } from './pages/Error404';
import Layout from './components/layouts/Layout';


function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <AllMeetUps/>
                </Route>
                <Route path="/new-meetup">
                    <NewMeetUps/>
                </Route>
                <Route path="/favorites">
                    <Favorite/>
                </Route>
                <Route>
                    <Error404 />
                </Route>
            </Switch>

        </Layout>

    );
}

export default App;
