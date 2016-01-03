#Node.jsのinstallコマンドは、Node.js command promptからとGitのコマンドラインからしか実行できないので注意。


//ローカルのmongodb起動
>今回は、サーバーのを使うけど、
c:\Program Files\MongoDB 2.6 Standard\bin>
.\mongod.exe --dbpath C:\data\db

#Node.jsを起動。
cdで以下まで移動。
\jsWorkSpaces\jq-ud\backbone-library>node server.js

#答え
backbone-fundamentals/practicals/exercise-2/site at gh-pages · addyosmani/backbone-fundamentals

#テストコード

jQuery.get('/api/books/',function(data,textStatus,jqXHR) {console.log('getれすぽインす');console.log(data);console.log(textStatus);console.log(jqXHR)});


>追加

jQuery.post('/api/books/',
{
'title':'test title',
'author':'ore',
'releaseDate':new Date(2011,4,21).getTime()
},
function(data,textStatus,jqXHR) {
console.log('getれすぽインす');
console.log(data);
console.log(textStatus);
console.log(jqXHR)
});
