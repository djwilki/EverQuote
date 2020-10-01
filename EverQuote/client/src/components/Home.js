import React, { useEffect } from 'react';
import MainContent from './MainContent';
import Navbar from './Navbar';
import { connect, useDispatch } from 'react-redux';
import { setUserNotes } from '../store/notes';
import { setSelectedNotebook } from '../store/session';

function Home({ userId }) {
    const dispatch = useDispatch();
    useEffect(() => {
        const getNotes = async () => {
            await dispatch(setUserNotes(userId));
        }
        getNotes();

        // Placeholder for setting selected notebook to user's default notebook on login
        dispatch(setSelectedNotebook(1));
    }, [dispatch, userId]);


    return (
        <>
            <Navbar />
            <MainContent />
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        userId: state.session.user_id
    }
};

export default connect(mapStateToProps)(Home);