const path = require('path')
//这时nodejs的写法 webpack是基于node
exports.resolve = function(dir) {
    return path.join(__dirname, '../', dir)
}
