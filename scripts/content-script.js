$(function () {
    //增加按钮
    $("._7gdyuNUv").append("<div>|</div><button type='button' id='rpcDownload' class='B10aL8VQ s6mStVxD vMQD6aai vk7WaOg_ a2I1sBCL tAofAbwG'>RPC下载</button>");
    //绑定事件
    $("#rpcDownload").bind("click", function () {
        //查询本页面的视频节点 并获取视频号
        $(".Eie04v01").each(function (index, element) {
            //每个视频旁边都添加一个按钮
            $(this).find("a").attr("href", function (i, origValue) {
                var concat = "https://rssdownload.duanzhang.life:5555/api/downloadById.json?id=".concat(origValue);
                console.log(concat);
                fetch(concat)
                    .then(function (response) {
                        if (response.status !== 200) {
                            console.log("存在一个问题，状态码为：" + response.status);
                            return;
                        }
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data)
                    });
            });
        });
    });
})