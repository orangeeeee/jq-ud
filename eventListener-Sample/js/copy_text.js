//「Search」ボタン押下時イベント
$("[id^='searchBtnId']").on("click", function() {
    let rowIndex = $(this).attr("data-index");
    console.log("index:" + rowIndex);
});

//jQuery UI Dialog Sample
$("img-click").on("click", function() {
    alert("No Yeah");
});


//「Search」ボタン押下時イベント
$("[id^='searchBtnId']").on("click", function() {
    let rowIndex = $(this).attr("data-index");
    console.log("index:" + rowIndex);
});




/**------------*/
$("body").on("click", ".img-click", function() {
    console.log("click image div");
    alert("No Yeah");
});

//「Search」ボタン押下時イベント
$("body").on("click", "[id^='searchBtnId']", function() {
    let rowIndex = $(this).attr("data-index");
    console.log("index:" + rowIndex);
});
