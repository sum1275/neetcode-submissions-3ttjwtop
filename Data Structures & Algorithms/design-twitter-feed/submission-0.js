class MaxHeap {
    constructor(priorityFn) {
        this.heap = [];
        this.priority = priorityFn; // function that returns priority number
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    // get parent index
    parent(i) { return Math.floor((i - 1) / 2); }
    left(i) { return 2 * i + 1; }
    right(i) { return 2 * i + 2; }

    // swap helper
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // add new value
    enqueue(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // move item up until heap property restored
    heapifyUp(i) {
        while (i > 0) {
            const p = this.parent(i);

            // if current node has higher priority than parent → swap
            if (this.priority(this.heap[i]) > this.priority(this.heap[p])) {
                this.swap(i, p);
                i = p;
            } else break;
        }
    }

    // remove and return max element
    dequeue() {
        if (this.isEmpty()) return null;

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const top = this.heap[0];

        // move last element to top
        this.heap[0] = this.heap.pop();

        // heapify down from root
        this.heapifyDown(0);

        return top;
    }

    // Bubble down
    heapifyDown(i) {
        while (true) {
            const left = this.left(i);
            const right = this.right(i);

            let largest = i;

            if (
                left < this.heap.length &&
                this.priority(this.heap[left]) > this.priority(this.heap[largest])
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.priority(this.heap[right]) > this.priority(this.heap[largest])
            ) {
                largest = right;
            }

            if (largest !== i) {
                this.swap(i, largest);
                i = largest;
            } else {
                break;
            }
        }
    }

    // Look at max element
    peek() {
        return this.heap[0] || null;
    }
}


class Twitter {
    constructor() {
        this.time = 0;
        this.tweets = {};
        this.following = {};
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweets[userId]) {
            this.tweets[userId] = []
        }
        this.tweets[userId].push({ id: tweetId, time: this.time++ })
    }


    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const users = new Set([userId])
        if (this.following[userId]) {
            for (const f of this.following[userId]) {
                users.add(f)
            }
        }
        const pq = new MaxHeap(x => x.tweet.time)

        for (const u of users) {
            const tw = this.tweets[u];
            if (tw && tw.length > 0) {
                const i = tw.length - 1;
                pq.enqueue({ tweet: tw[i], user: u, index: i })
            }
        }
        const ans = [];
        while (ans.length < 10 && !pq.isEmpty()) {
            const { tweet, user, index } = pq.dequeue();
            ans.push(tweet.id)
            if (index > 0) {
                const userTweets = this.tweets[user]
                pq.enqueue({
                    tweet: userTweets[index - 1],
                    user: user,
                    index: index - 1
                })
            }

        }
        return ans;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId == followeeId) {
            return;
        }
        if (!this.following[followerId]) {
            this.following[followerId] = new Set()
        }
        this.following[followerId].add(followeeId)
    }


    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.following[followerId]) {
            this.following[followerId].delete(followeeId);
        }
    }
}
