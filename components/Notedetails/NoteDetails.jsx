import style from '../styles/Evernote.module.scss'
import { useEffect, useState } from 'react';
import {app, database} from '../../pages/api/firebaseConfig'
import {doc, getDoc, getDocs, collection, updateDoc, deleteDoc} from 'firebase/firestore'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
const dbInstance = collection(database, 'notes');

export default function NoteDetails({ID}) {

    const [singleNote, setSingleNote] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDesc, setNoteDesc] = useState('');

    const getSingleNote = async () => {

        if(ID) {

            const singleNote = doc(database, 'notes', ID)
            const data = await getDoc(singleNote)
            setSingleNote({...data.data(), id: data.id})

        }

    }

    const editNote = (id) => {

        const collectionById = doc(database, 'notes', ID)

        updateDoc(collectionById, {
            noteTitle: noteTitle,
            noteDesc: noteDesc,
        }).then(() => {
            
            setNoteTitle(singleNote.noteTitle);
            setNoteDesc(singleNote.noteDesc);
            window.location.reload();

        })

    }

    const deleteNote = () => {

        const collectionById = doc(database, 'notes', ID)

        const promp = prompt('Are you sure you want to delete this?');

        if (promp === 'yes') {
            deleteDoc(collectionById, {
            })
                .then(() => {
                    window.location.reload()
            })
        } 
        
       

    }

    function isOpen () {

        setIsEdit(!isEdit)
        setNoteTitle(singleNote.noteTitle);
        setNoteDesc(singleNote.noteDesc)

    }

    /*const getNotes = () => {

        getDocs(dbInstance).then((data) => {

            setSingleNote(data.docs.map((item) => {

                return { ...item.data(), id: item.id}

            })[0]);

        })

    }*/

    useEffect(() => {

        getSingleNote();

    }, [ID])

    return (
        <div>
            {isEdit ? (
                <div>
                    <input placeholder='Enter the Title'
                        className={style.input}
                        onChange={(e) => setNoteTitle(e.target.value)}
                        value={noteTitle}
                    />
                    <div>
                        <ReactQuill
                            theme='snow'
                            onChange={setNoteDesc}
                            value={noteDesc}
                        />
                    </div>
                    <button className={style.saveBtn} onClick={editNote}>
                        Submit
                    </button> <br />
                    <button className={style.deleteBtn} onClick={deleteNote}>Delete</button>
                </div>
            ) : (
                <></>
            )}
            <br />
            <h2>{singleNote.noteTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: singleNote.noteDesc}}></div>
        </div>

    )

}