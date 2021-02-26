const MongoClient = require("mongodb").MongoClient

const DBNAME = "alicex"
const MONGO_URI = process.env.MONGO_URI

exports.handler = async event => {
    try {
        const { email, firstname, location } = JSON.parse(event.body)

        if (!(email && firstname && location)) throw new Error("Missing parameters")

        const client = await MongoClient.connect(MONGO_URI, {
            useUnifiedTopology: true,
        })
        const collection = client.db(DBNAME).collection("subscribers")
        const subscriber = await collection.findOne({ email })
        if (!subscriber) {
            await collection.insertOne({ firstname, email, location })
        }

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Set-Cookie": "waitlisted=1; Path=/",
            },
            body: JSON.stringify({
                email,
                firstname,
                location,
                alreadySubscribed: !!subscriber,
            }),
        }
    } catch (err) {
        console.log(err.message)
        return {
            statusCode: 400,
            body: "Bad Request",
        }
    }
}