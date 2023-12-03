import { addDoc, collection, getFirestore } from "@firebase/firestore";
import { app } from "../config/firebase";

const db = getFirestore(app);

export const addRoutine = (data) => {
    const ref = db.collection(db, "routines");
    try {
        addDoc(ref, data);
    } catch (err) {
        console.log(err);
    }
};

export const getAllRoutines = (renderer) => {
    var query = db.collection("routines").limit(50);
    this.getDocumentsInQuery(query, renderer);
};

export const getDocumentsInQuery = (query, renderer) => {
    query.onSnapshot(function(snapshot) {
        if(!snapshot.size) return renderer.empty();
        
        snapshot.docChanges().forEach(function(change) {
            if(change.type === 'removed') {
                renderer.remove(change.doc);
            } else {
                renderer.display(change.doc);
            }
        });
    });
};

export const getRoutine = (data) => {
    /**
     * TODO: Retrieve a single routine
     */
};

export const getFilteredRoutines = (data) => {
    /**
     * TODO: Retrieve filtered list of routines
     */
};

export const addWorkoutSession = (data) => {
    /**
     * TODO: Implement adding a routine
     */
};
