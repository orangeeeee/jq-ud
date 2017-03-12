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
 * JSON形式テストデータを返す。
 */
function getRowData() {

    let no = (index + 1);
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
