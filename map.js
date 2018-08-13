
const mapPrototype = {
	get size() {
		return Object.keys(this.store).length

	},
	set size(value) {
		if (value === 0) this.clear()
	},
	get keys() {
		return Object.keys(this.store)
	},
	get values() {
		return Object.values(this.store)
	},
	get entries() {
		return Object.entries(this.store)
	},
	has(key) {
		return key in this.store
	},
	get(key) {
		return this.store[key]
	},
	set(key, value) {
		this.store[key] = value;
		return this
	},
	delete(key) {
		return delete this.store[key]
	},
	clear() {
		this.store = {}
	},
	forEach(cb) {
		for (let key in this.store) {
			cb(this.store[key], key, this)
		}
	},
	[Symbol.iterator]() {
		let values = this.values.slice();
		return {
			next() {
				let value = values.shift();
				return {
					value,
					done: Boolean(value) ? false : true
				};
			}
		};

	}
}
createMap.prototype = mapPrototype;
//function copy(source, target) {
//	return Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
//}
function createMap() {
	const map = {
		store: {},
		__proto__: createMap.prototype
	};
	return map
}
module.exports = createMap;