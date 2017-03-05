$(function() {
    var getNow = function() {

        if (!Date.now) {
            return new Date().getTime();
        }
        return Date.now();
    };
    var getExecutionCnt = function(callback) {

        var actionTime = getNow();
        var time = 0;
        var count = 0;

        while (time < 2000) {
            // console.log(time);
            time = getNow() - actionTime;
            callback();
            count++;
        }
        return count;
    };
    $("#parentButton").on("click", function() {

        var result = 0;
        result = getExecutionCnt(function() {
            $("#inputEmail3");
        });
        console.log("jQuery Id Selector:" + result);

        result = getExecutionCnt(function() {
            document.getElementById("inputEmail3");
        });
        console.log("getElementById:" + result);

        result = getExecutionCnt(function() {
            $(".form-control");
        });
        console.log("class selector:" + result);

        result = getExecutionCnt(function() {
            $("input.form-control");
        });
        console.log("class and tag selector:" + result);


        alert("計測終了");
    });
});
