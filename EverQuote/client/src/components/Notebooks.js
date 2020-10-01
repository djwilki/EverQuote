import React from 'react';
import '../styles/index.css';
import styles from '../styles/notebook.module.css';
import {login} from '../store/users'
import { useDispatch, useSelector } from 'react-redux';


function Notebooks(props) {

    const dispatch = useDispatch();    
    const userId = useSelector(state=>state.session.user_id)
    
    const newNotebook = () => {
        
    }


    return (
        <main className={styles.notebooks_container}>
            <h1>Notebooks</h1>
            <div className={styles.notebooks_title_bar}>
                <div className={styles.notebooks_title}>
                    <h2>My notebook list</h2>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.newNotebook} onClick={newNotebook}>New Notebook</button>
                    <button className={styles.sortOptions}>&#8645;</button>
                </div>
            </div>
            <table className={styles.notebooks_table}>
                <tbody>
                    <tr className={styles.notebooks_table_headers}>
                        <th>TITLE</th>
                        <th>CREATED BY</th>
                        <th>UPDATED</th>
                        <th>ACTIONS</th>
                    </tr>
                    <tr>
                        <td>My Notebook (5)</td>
                        <td>cole.joshua.hunter.dev@gmail.co...</td>
                        <td>Sep 28</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>My Notebook (5)</td>
                        <td>cole.joshua.hunter.dev@gmail.co...</td>
                        <td>Sep 28</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>My Notebook (5)</td>
                        <td>cole.joshua.hunter.dev@gmail.co...</td>
                        <td>Sep 28</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>My Notebook (5)</td>
                        <td>cole.joshua.hunter.dev@gmail.co...</td>
                        <td>Sep 28</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}
export default Notebooks;

// OLD VERSION IN CASE WE NEED

// import React from 'react';
// import styles from '../styles/notebook.module.css';
// import { login } from '../store/users'


// function Notebooks(props) {
//     return (
//         <main className={styles.notebooks_container}>
//             <h1>Notebooks</h1>
//             <div className={styles.notebooks_title_bar}>
//                 <span className={styles.notebooks_title_bar}>
//                     My notebook list
//                 </span>
//                 <span className={styles.title_bar_buttons}>
//                     <button className={styles.newNotebookBtn}>
//                         <svg className={styles.notebook_svg} fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M5.955 4.5H8.03v15H5.955v-15z" fill="currentColor"></path>
//                             <path fillRule="evenodd" clipRule="evenodd" d="M9.281 19.5v-15h7.09c.921 0 1.667.746 1.667 1.666v7.294h-.025a4.583 4.583 0 00-4.346 6.04H9.28zm5.88-9.167a.75.75 0 000-1.5h-3a.75.75 0 000 1.5h3z" fill="currentColor"></path>
//                             <path d="M18.638 15.549a.625.625 0 10-1.25 0v1.904h-1.846a.625.625 0 100 1.25h1.846v1.846a.625.625 0 001.25 0v-1.846h1.904a.625.625 0 100-1.25h-1.904v-1.904z" fill="currentColor"></path>
//                             </svg>
//                         <span>
//                             New Notebook
//                         </span>
//                     </button>
//                     {/* <svg className={styles.notebook_svg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.183 4.625a.625.625 0 00-1.25 0V17.87L5.067 16a.625.625 0 00-.884 0 .62.62 0 000 .88l2.933 2.94c.244.244.64.244.884 0l2.933-2.94a.62.62 0 000-.88.625.625 0 00-.884 0l-1.866 1.87V4.625zM11.625 5a.625.625 0 100 1.25h8.75a.625.625 0 100-1.25h-8.75zM11 9.375c0-.345.28-.625.625-.625h6.25a.625.625 0 110 1.25h-6.25A.625.625 0 0111 9.375zM11.625 12.5a.625.625 0 100 1.25h3.75a.625.625 0 100-1.25h-3.75z" fill="currentColor"></path></svg> */}
//                 </span>
//             </div>
//             <table className={styles.notebooks_table}>
//                 <tbody>
//                     <tr className={styles.notebooks_table_headers}>
//                         <th>TITLE</th>
//                         <th>CREATED BY</th>
//                         <th>UPDATED</th>
//                         <th>ACTIONS</th>
//                     </tr>
//                 </tbody>
//             </table>
//         </main>
//     );
// }
// export default Notebooks;