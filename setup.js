var tree;
document.addEventListener("DOMContentLoaded", function (event) {
    tree = new Tree();
    for (var i = 0; i < 5; i++) {
        let value = getRandomInt(0, 10);
        tree.addValue(value);
    }
    console.log(tree);
    tree.traverse();
    var result = tree.search(8);
    if (result == null) {
        console.log('not found');
    } else {
        console.log(result);
    }
})
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}