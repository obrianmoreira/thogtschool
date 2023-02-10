import React from 'react';
import style from '../styles/Evernote.module.scss'
import { useState, useEffect } from 'react'
import {app, database} from '../pages/api/firebaseConfig';
import {collection, addDoc, getDocs} from 'firebase/firestore';
import NoteDetails from '../components/NoteDetails'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const dbInstance = collection(database, 'notes');
export default function NoteOperations({getSingleNote, isOpen}) {

    const [isInputOpen, setInputVisible] = useState(false);
    const [noteTitle, setNote] = useState('')
    const [noteDesc, setNoteDesc] = useState('');
    const [notesArray, setNotesArray] = useState([]);

    const inputOpen = () => {

        setInputVisible(!isInputOpen);

    }

    const addDesc = (value) => {

        setNoteDesc(value)

    }

    const saveNote = () => {

        addDoc(dbInstance, {
            noteTitle: noteTitle,
            noteDesc: noteDesc,
        })
            .then(() => {

                setNote('')
                setNoteDesc('')
                getNotes();

            })

    }

    const getNotes = () => {

        getDocs(dbInstance).then((data) => {
            setNotesArray(data.docs.map((item) => {
                return { ...item.data(), id: item.id}
            }));
        })

    }

    useEffect(() => {

        getNotes();

    }, [])
    
    return (

        <div>
            <div className={style.btnContainer}>
                <button className={style.button} onClick={inputOpen}>
                    Add a new note
                </button>
            </div>
            {isInputOpen ? (
                <div>
                    <input placeholder='Enter the Title'
                        className={style.input}
                        onChange={(e) => setNote(e.target.value)}
                        value={noteTitle}
                    />
                    <div>
                        <ReactQuill
                            theme='snow'
                            onChange={addDesc}
                            value={noteDesc}
                        />
                    </div>
                    <button className={style.saveBtn} onClick={saveNote}>
                        Submit
                    </button>
                </div>
            ) : (
                <></>
            )}
            <button className={style.editBtn} onClick={NoteDetails.isOpen}>Change</button>
            {notesArray.map((note) => {
                return (
                    <div>
                        <div className={style.notesInner} onClick={() => getSingleNote(note.id)}>
                            <h4>{note.noteTitle}</h4>
                        </div>
                    </div>
                )
            })}
        </div>

    )

}