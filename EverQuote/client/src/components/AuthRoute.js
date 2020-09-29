import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ user_id, path }) => {
    if (!user_id) {
        return <Redirect to='/login'/>;
    }

    return (
        <Route path={path}/>
    );
}

const mapStateToProps = (state, ownProps) => {
    const { auth: { user_id } } = state;
    return { user_id: user_id, ...ownProps };
}

export default connect(mapStateToProps)(AuthRoute);