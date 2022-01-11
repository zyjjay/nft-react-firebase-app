import { useReducer, useEffect, useState } from "react"
import { projectFirestore, timestamp } from "../firebase/config"

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null,
}

const firestoreReducer = (state, action) => {
    switch(action.type) {
        case('IS_PENDING'):
            return { isPending: true, document: null, success: false, error: null } //reseting state explicitly
        case('ADDED_DOCUMENT'):
            return { isPending: false, document: action.payload, success: true, error: null }
        case('DELETED_DOCUMENT'):
            return { isPending: false, document: null, success: true, error: null }
        case('ERROR'):
            return { isPending: false, document: null, success: false, error: action.payload }
        default: 
            return state
    }
}

export const useFirestore = (collection) => {
    const [ response, dispatch ] = useReducer(firestoreReducer, initialState)
    const [ isCancelled, setIsCancelled ] = useState(false)

    // collection ref
    const ref = projectFirestore.collection(collection)

    // only dispatch is not cancelled
    const dispatchIfNotCancelled = (action) => {
        if(!isCancelled)
            dispatch(action)
    }

    // add
    const addDocument = async (doc) => { //doc is an object we want to add
        dispatch({ type: 'IS_PENDING' })

        try {
            const createdAt = timestamp.fromDate(new Date())
            const addedDocument = await ref.add({ ...doc, createdAt })
            dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
        } catch(err) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
        }
    }

    // delete
    const deleteDocument = async (id) => { //we need the id to scope the ref collection
        dispatch({type: 'IS_PENDING'})

        try {
            await ref.doc(id).delete()
            dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' })
        } catch(err) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: 'Could not delete' })
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument, deleteDocument, response }
}