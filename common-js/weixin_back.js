/*作者：sheng huang
 **链接：https://www.zhihu.com/question/40511430/answer/139102836
 **来源：知乎
 **著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 **解决微信端【监测】返回按钮
 */
$(function () {
        pushHistory();
        var bool = false;
        setTimeout(function () {
                bool = true;
        }, 1500);
        window.addEventListener("popstate", function (e) {
                if (bool) {
                        alert("我监听到了浏览器的返回按钮事件啦"); //根据自己的需求实现自己的功能  
                        location.href = '你要跳转的链接';
                }
                pushHistory();

        }, false);
});

function pushHistory() {
        var state = {
                title: "title",
                url: "#"
        };
        window.history.pushState(state, "title", "#");
};