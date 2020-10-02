import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Notebooks from './Notebooks';
import Notes from './Notes';

function MainContent({ match }) {
    return (
        <div style={{width: "100%"}}>
            <Route path={match.url + "notes"} component={Notes} />
            <Route path={match.url + "notebooks"} component={Notebooks} />
        </div>
    );
}
export default withRouter(MainContent);