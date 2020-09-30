import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Notebooks from './Notebooks';
import Notes from './Notes';


// function MainContent(props) {
//     return (
//         <Switch>
//             <Route path="/notes">
//                 <Notes />
//             </Route>
//             <Route path="/notebooks">
//                 <Notebooks />
//             </Route>
//             <Route path="/notebooks/:id">
//                 <Notes />
//             </Route>
//         </Switch>
//     );
// }
function MainContent({ match }) {
    return (
        <div>
            <Route path={match.url + "notes"} component={Notes} />
            <Route path={match.url + "notebooks"} component={Notebooks} />
        </div>
    );
}
export default withRouter(MainContent);