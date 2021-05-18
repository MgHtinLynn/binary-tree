function Tree() {
    this.root = null;
}

// tree sorting
Tree.prototype.traverse = function () {
    this.root.visit();
};

// tree search
Tree.prototype.search = function (val) {
    var found = this.root.search(val);
    return found;
};

// tree add node
Tree.prototype.addValue = function (val) {
    var n = new Node(val);
    if (this.root == null) {
        this.root = n;
    } else {
        this.root.addNode(n);
    }
};