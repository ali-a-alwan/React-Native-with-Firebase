import { db } from '../config/db';
import { Actions } from 'react-native-router-flux';

export const addStudent =  (name, rnumber, major, year, status) => {
    db.ref('/students').child(rnumber).set({
        name: name,
        rnumber: rnumber,
        major: major,
        year: year,
        status: status
    }, () => Actions.ListScreen());
}

export const updateStudent =  (name, rnumber, major, year, status) => {
    db.ref('/students').child(rnumber).update({
        name: name,
        rnumber: rnumber,
        major: major,
        year: year,
        status: status
    }, () => Actions.ListScreen());
}

export const removeStudent =  (rnumber) => {
    db.ref('/students').child(rnumber).remove();
    Actions.ListScreen();
}
