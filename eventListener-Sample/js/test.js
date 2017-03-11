$(function () {

    var template_table_row = _.template($('#template-rowHTML').html());
    // jquery - ui - dialog用
    var template_dialog = _.template($('#template-ui-dialog').html());

    $("#addHTML").on("click", function () {
        //追加行のデータを取得
        let addData = getRowData();
        //Tableに行を追加
        $("#sampla-table-tbody").append(template_table_row(addData));
    });


    $("#openDialog").on("click", function () {

        /* 必要なときに、必要なdiv要素を生成して、利用する */
        var ui_template = $("<div></div>").dialog({
            autoOpen: false
        });
        /* ダイアログの中身は、どこかから取ってきたり、べた書きしたり */
        ui_template.html(template_dialog(getData()));
        /* ダイアログのオプションを設定して */
        ui_template.dialog("option", {
            title: "いけざき",
            width: 600,
            height: "auto",
            buttons: {
                "Close": function () {
                    $(this).dialog("close");
                }
            }
        });
        /* ダイアログを開きます */
        ui_template.dialog("open");
    });

    //例１
    $("img-click").on("click", function () {
        alert("ss");
    });

    $("body").on("click", ".img-click", function () {
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
