$(function() {

    var template_table_row = _.template($('#template-rowHTML').html());
    // jquery - ui - dialog用
    var template_dialog = _.template($('#template-ui-dialog').html());

    $("#addHTML").on("click", function() {
        //追加行のデータを取得
        let addData = getRowData();
        //Tableに行を追加
        $("#sampla-table-tbody").append(template_table_row(addData));
    });


    $("#openDialog").on("click", function() {

        //dialogオブジェクト生成
        var dialogObj = $("<div></div>").dialog({
            autoOpen: false
        });
        // contents部分をtemplateを使用し追加
        dialogObj.html(template_dialog);
        //optionを拡張
        var dialog_option = $.extend(defalut_dialog_option, {
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

    //例１
    $("img-click").on("click", function() {
        alert("ss");
    });

    $("body").on("click", ".img-click", function() {
        console.log("click image div");
        alert("No Yeah");
    });
});

function getRowData() {
    return {
        "no": "01",
        "item1": "33",
        "item2": "aa",
        "item3": "bbb"
    };
};

function getData() {
    return {
        "no": "01",
        "item1": "33",
        "item2": "aa",
        "item3": "bbb"
    };
};
