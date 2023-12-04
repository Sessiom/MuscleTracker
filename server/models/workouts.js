/* B"H
*/

const { ObjectId, connect } = require('./mongo');
const data = require("../data/workouts.json");

/**
 * @typedef {Object} Workout
 * @property {number} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} userName
 * @property {string} image
 * @property {string} title
 * @property {string} date
 * @property {string} distance
 * @property {string} duration
 * @property {string} location
 * @property {string} picture
 */

const COLLECTION_NAME = 'workouts';
async function getCollection() {
  const db = await connect();
  return db.collection(COLLECTION_NAME);
}


/**
 * @returns {Promise<Workout[]>} An array of workouts
 */

async function getAll() {
  const col = await getCollection();
  return col.find({}).toArray();
}

/**
 * @param {string} id - The Workout's ID.
 */

async function get(id) {
  const col = await getCollection();
  return await col.findOne({ _id: ObjectId(id) });
}

async function getByCategory(category) {
  const col = await getCollection();
  return await col.findOne({ category });

}

async function search(query) {
  const col = await getCollection();
  const workouts = await col.find({
    $or: [
      { title: { $regex: query, $options: 'i' } },
      { location: { $regex: query, $options: 'i' } },
    ],
  }).toArray();

  return workouts;
}

/**
 * @param {Workout} workout - The workout to create.
 * @returns {Promise<Workout>} The created workout.
 */

async function create(workout) {
  const newWorkout = {
    id: data.workouts.length + 1,
    ...workout,
  };
  const col = await getCollection();
  const result = await col.insertOne(newWorkout);
  newWorkout._id = result.insertedId;

  return newWorkout;
}

/**
 * @param {Workout} workout - The workout's data.
 * @returns {workout} The updated workout.
 */

async function update(workout) {

  const col = await getCollection();
  const result = await col.findOneAndUpdate(
    { _id: ObjectId(workout.id) },
    { $set: workout },
    { returnDocument: 'after' },
  );
  return result;
}

/**
 * @param {string} id - The workout's ID.
 */
async function remove(id) {
  const col = await getCollection();
  const result = await col.deleteOne({ _id: ObjectId(id) });
  if(result.deletedCount === 0) {
    throw new Error('Workout not found');
  }
}

async function seed() {
  const col = await getCollection();

  await col.insertMany(data.workouts);
}


module.exports = {
  getAll, get, getByCategory, search, create, update, remove, getCollection, COLLECTION_NAME, seed
};