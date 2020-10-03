import React from 'react';
import MoveNotebookTitle from './MoveNotebookTitle';
import {  useSelector } from "react-redux";

const MoveNoteModal = () => {
    const notebooks = useSelector(state => state.entities.notebooks)
    return (
        <table>
            <tbody>
                <tr>
                    <th>Move Note to...</th>
                </tr>
                {
                    notebooks.map((notebook, i) => {
                        return (
                                <MoveNotebookTitle notebook={notebook} key={`notebook-${i + 1}`} /> 
                            )
                    })
                }
            </tbody>
        </table>
    )
}