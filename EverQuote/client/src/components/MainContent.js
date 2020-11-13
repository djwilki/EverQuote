import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Notebooks from './Notebooks';
import Notes from './Notes';
import About from './About';

function MainContent({ match }) {
    return (
        <div style={{width: "100%"}}>
            <Route path={match.url + "notes"} exact component={Notes} />
            <Route path={match.url + "notebooks"} exact component={Notebooks} />
            <Route path={match.url + "notebooks/:notebookId"} exact component={Notes} />
            <Route path={match.url + "about"} exact component={About} />
        </div>
    );
}
export default withRouter(MainContent);