# Unhandled Promise Rejection in MongoDB Async Operations

This repository demonstrates a common error when working with MongoDB's asynchronous functions in JavaScript.  Failure to properly handle promise rejections can lead to unexpected behavior and difficulty debugging.

## Bug
The provided `bug.js` file shows an example of asynchronous MongoDB operations.  If an error occurs during the `client.connect()`, `collection.insertOne()`, or `collection.updateOne()` operations, the promise will reject.  Without proper error handling, this rejection will be unhandled and might not be logged or visible in the console.