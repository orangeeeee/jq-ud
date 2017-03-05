$(function() {
    var row_template = _.template($('#template-rowHTML').html());

    $("#addHTML").on("click", function() {
        //追加行のデータを取得
        let addData = getRowData();
        //Tableに行を追加
        $("#sampla-table-tbody").append(row_template(addData));
    });

    // $().on
});

function getRowData() {
    return {
        "no": "01",
        "item1": "33",
        "item2": "aa",
        "item3": "bbb"
    };
};
