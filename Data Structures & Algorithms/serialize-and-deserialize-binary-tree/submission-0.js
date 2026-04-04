class Codec {

    serialize(root) {
        if (!root) return "";

        let res = [];
        let queue = [root];

        while (queue.length) {
            let node = queue.shift();
            if (node) {
                res.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            } else {
                res.push("null");
            }
        }
        return res.join(",");
    }

    deserialize(data) {
        if (!data) return null;

        data = data.split(",");
        let root = new TreeNode(+data[0]);
        let queue = [root];
        let i = 1;

        while (queue.length) {
            let node = queue.shift();

            if (data[i] !== "null") {
                node.left = new TreeNode(+data[i]);
                queue.push(node.left);
            }
            i++;

            if (data[i] !== "null") {
                node.right = new TreeNode(+data[i]);
                queue.push(node.right);
            }
            i++;
        }
        return root;
    }
}
