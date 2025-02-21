```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const collection = client.db("mydatabase").collection("mycollection");
    // Some operations to insert and update documents
    await collection.insertOne({ name: "John Doe" });
    await collection.updateOne({ name: "John Doe" }, { $set: { age: 30 } });
  } catch (err) {
    console.error("Error during MongoDB operations:", err);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```