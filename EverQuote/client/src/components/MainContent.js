import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Notebooks from './Notebooks';
import Notes from './Notes';

function MainContent({ match }) {
    return (
        <div style={{width: "100%"}}>
            <Route path={match.url + "notes"} exact component={Notes} />
            <Route path={match.url + "notebooks"} exact component={Notebooks} />
            <Route path={match.url + "notebooks/:notebookId"} exact component={Notes} />
            <Route path={match.url + "trash"} exact component={Notes} />
        </div>
    );
}
export default withRouter(MainContent);