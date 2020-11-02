const TOGGLE_USER_MODAL = 'ui/TOGGLE_USER_MODAL';
const TOGGLE_NOTE_OPTIONS_MODAL = 'ui/TOGGLE_NOTE_OPTIONS_MODAL';
const TOGGLE_NOTEBOOK_OPTIONS_MODAL = 'ui/TOGGLE_NOTEBOOK_OPTIONS_MODAL';
const TOGGLE_MOVE_NOTES_MODAL = 'ui/TOGGLE_MOVE_NOTES_MODAL';
const TOGGLE_EDIT_NOTEBOOK_MODAL = 'ui/TOGGLE_EDIT_NOTEBOOK_MODAL';
const TOGGLE_CREATE_NOTEBOOK_MODAL = 'ui/TOGGLE_CREATE_NOTEBOOK_MODAL';
const TOGGLE_LIST_NOTES = 'ui/TOGGLE_LIST_NOTES';
const TOGGLE_EDITOR_FULLSCREEN = 'ui/TOGGLE_EDITOR_FULLSCREEN';

export const toggleEditorFullscreen = () => {
    return {
        type: TOGGLE_EDITOR_FULLSCREEN
    }
}

export const toggleUserModal = () => {
    return {
        type: TOGGLE_USER_MODAL
    }
};

export const toggleNoteModal = () => {
    return {
        type: TOGGLE_NOTE_OPTIONS_MODAL
    }
};

export const toggleNotebookModal = () => {
    return {
        type: TOGGLE_NOTEBOOK_OPTIONS_MODAL
    }
};

export const toggleMoveModal = () => {
    return {
        type: TOGGLE_MOVE_NOTES_MODAL
    }
};

export const toggleEditNotebookModal = () => {
    return {
        type: TOGGLE_EDIT_NOTEBOOK_MODAL
    }
};

export const toggleCreateNotebookModal = () => {
    return {
        type: TOGGLE_CREATE_NOTEBOOK_MODAL
    }
};

export const toggleListNotes = () => {
    return {
        type: TOGGLE_LIST_NOTES
    }
}

const initialUIState = {
    userModal: false,
    noteOptions: false,
    notebookOptions: false,
    moveNotes: false,
    editNotebook: false,
    createNotebook: false,
    listNotes: false,
    editorFullscreen: false
};

export default function uiReducer(state = initialUIState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case TOGGLE_USER_MODAL:
            newState.userModal = !newState.userModal;
            return newState;
        case TOGGLE_CREATE_NOTEBOOK_MODAL:
            newState.createNotebook = !newState.createNotebook;
            return newState;
        case TOGGLE_EDIT_NOTEBOOK_MODAL:
            newState.editNotebook = !newState.editNotebook;
            return newState;
        case TOGGLE_NOTE_OPTIONS_MODAL:
            newState.noteOptions = !newState.userModal;
            return newState;
        case TOGGLE_NOTEBOOK_OPTIONS_MODAL:
            newState.notebookOptions = !newState.notebookOptions;
            return newState;
        case TOGGLE_MOVE_NOTES_MODAL:
            newState.moveNotes = !newState.moveNotes;
            return newState;
        case TOGGLE_LIST_NOTES:
            newState.listNotes = !newState.listNotes;
            return newState;
        case TOGGLE_EDITOR_FULLSCREEN:
            newState.editorFullscreen = !newState.editorFullscreen;
            return newState;
        default:
            return state;
    }
}
