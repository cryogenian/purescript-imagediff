// module Graphics.ImageDiff

var imageDiff = require("image-diff");

exports.diff = function(option, Nothing, Just) {
    return function(cb, eb) {
        if (option.diff.prototype == Nothing.prototype) {
            delete option.diff;
        }
        return imageDiff(option, function(cb, eb));
    };
};
