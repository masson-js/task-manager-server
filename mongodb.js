// CRUD operations // create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connetionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connetionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to database!')
    }

    const db = client.db(databaseName)
 
    db.collection('tasks').deleteOne({
        description: 'renew'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})