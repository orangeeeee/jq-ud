let index = 0;

$(function() {

    // 「Add HTML」ボタン押下時にTableに行追加
    $("#addHTML").on("click", function() {
        //追加行のデータを取得
        let addData = getRowData();
        //Tableに行を追加
        $("#sampla-table-tbody").append(template_table_row(addData));
        //indexを追加
        index++;
    });
    //<input type="button" value="search" id="searchBtnId0"
    //    data-index="0" class="btn btn-info">
    //「Search」ボタン押下時イベント
    $("[id^='searchBtnId']").on("click", function() {
        let rowIndex = $(this).attr("data-index");
        console.log("index:" + rowIndex);
    });
    //「Search」ボタン押下時イベント
    $("#result-table").on("click", "[id^='searchBtnId']", function() {
        let rowIndex = $(this).attr("data-index");
        console.log("index:" + rowIndex);
    });
    //jQuery UI Dialog Sample
    $("body").on("click", ".img-click", function() {
        console.log("click image div");
        alert("No Yeah");
    });
    // Dialogを開く
    $("#openDialog").on("click", function() {

        //dialogオブジェクト生成
        let dialogObj = $("<div></div>").dialog({
            autoOpen: false
        });
        // contents部分をtemplateを使用し追加
        dialogObj.html(template_dialog);
        //optionを拡張
        let dialog_option = $.extend(defalut_dialog_option, {
            title: "いけざき",
            buttons: {
                "Close": function() {
                    $(this).dialog("close");
                }
            }
        });
        //optionを追加
        dialogObj.dialog("option", dialog_option);
        // dialogを開く
        dialogObj.dialog("open");
    });
});

/**
 * テストデータを返す。
 */
function getRowData() {

    let no = (index + 1) + '';
    let searchBtnId = "searchBtnId" + index + '';

    return {
        "index": index,
        "no": no,
        "item1": "33",
        "item2": "aa",
        "item3": "bbb",
        "searchBtnId": searchBtnId
    };
};
