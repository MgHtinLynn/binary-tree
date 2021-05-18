function Node(val) {
    this.value = val
    this.left = null
    this.right = null
}
// tree add node
Node.prototype.addNode = function (n) {
    if (n.value < this.value) {
        if (this.left == null) {
            this.left = n
        } else {
            this.left.addNode(n)
        }
    } else if (n.value > this.value) {
        if (this.right == null) {
            this.right = n
        } else {
            this.right.addNode(n)
        }
    }
}
// tree sorting
Node.prototype.visit = function () {
    if (this.left != null) {
        this.left.visit()
    }
    console.log(this.value);
    if (this.right != null) {
        this.right.visit()
    }
}


// tree search
Node.prototype.search = function (val) {
    if (val == this.value) {
        return this
    } else if (val < this.value && this.left != null) {
        return this.left.search(val)
    } else if (val > this.value && this.right != null) {
        return this.right.search(val)
    }
    return null;
}