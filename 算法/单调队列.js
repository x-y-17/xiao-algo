class MQ {
	constructor() {
		this.queue = [];
	}

	dequeue(val) {
		if (this.queue.length > 0 && val === this.queue[0]) {
			this.queue.shift();
		}
	}
	enqueue(val) {
		while (this.queue.length > 0 && val > this.queue[this.queue.length - 1]) {
			this.queue.pop();
		}
		this.queue.push(val);
	}
	getMaxValue() {
		return this.queue[0];
	}
}
