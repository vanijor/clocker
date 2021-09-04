import { firestore } from 'firebase-admin'
import { firebaseServer } from './../../config/firebase/server'

const db = firebaseServer.firestore()
const agenda = db.collection('agenda')

export default async (req, res) => {
    const [, token] = req.headers.authorization.split(' ')

    if (!token) {
        return res.status(401)
    }
    try {
        const { user_id } = await firebaseServer.auth().verifyToken(token)
        const snapshot = await agenda
            .where('user_id', '==', user_id)
            .where('when', '==', req.query.when)
            .get()
        
        return res.status(200).json(snapshot.docs)
    } catch (error) {
        console.log('FB ERROR:', error);
        return res.status(401)
    }
}