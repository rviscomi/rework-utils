/** @module */
/**
 * Sum all values of an object and return the result
 * @param {Object} obj
 */
export default function sumObject(obj) {
	Object.values(obj).reduce((a, c) => a + c, 0);
}
