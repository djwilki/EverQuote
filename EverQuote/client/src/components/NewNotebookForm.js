import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const NewNotebookForm = ({}) => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user_id)


    const handleSubmit = async (event) => {
        event.stopPropagation();
        const res = await dispatch(addUserNotebooks(title, false, userId));

        if (res.ok) {
            return;
        }
    }

    return (
        <form action="" method="" onSubmit={handleSubmit}>
            <label>Name</label>
            <input name="title" type="text" placeholder="Notebook name" onChange={(e)=>setTitle(e.target.value)}/>
            <div>
                <button>Cancel</button>
                <button type="submit">Continue</button>
            </div>
        </form>
    )
}