import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import Notes from './Notes';

const AuthRoute = ({ user_id, path, component }) => {
    if (!user_id) {
        return <Redirect to='/login' />;
    }

    return (
        <>
        <Route path={path} component={component}/>
        { path === '/' ? <Redirect to='/notes'/> : <></>}
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    const { auth: { user_id } } = state;
    return { user_id: user_id, ...ownProps };
}

export default connect(mapStateToProps)(AuthRoute);