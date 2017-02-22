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
    var func1 = function() {
        $("#parentButton").val();
    };
    var func2 = function() {
        document.getElementById("parentButton");
    };
    $("#parentButton").on("click", function() {

        var count = getExecutionCnt(func1);
        console.log(count);

        var count = getExecutionCnt(func2);
        console.log(count);
        alert("計測終了");
    });
});
