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
            $("#parentButton").val();
        });
        console.log(result);

        var result = getExecutionCnt(function() {
            document.getElementById("parentButton");
        });
        console.log(result);
        alert("計測終了");
    });
});
