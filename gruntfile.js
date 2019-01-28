module.exports = function (grunt) {

    var options = {
        "loadGruntTasks": {
            "config": require("./package.json")
        }
    };


    require("load-grunt-config")(grunt);
    require("time-grunt")(grunt);
};