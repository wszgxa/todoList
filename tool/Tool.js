
//私有方法
function $(a ,b) {
    return (b || doc).querySelector(a);
}

var Tool = {
    /**
    * = notice
    * @about    提示消息显示
    * @params    {string} msg 提示语
    * @params    {num} time 延迟时间
    */
    notice: function(msg, time) {
        var $notice = $("#notice");
        this.changeClass($notice,"hide");
        $notice.innerText=msg;
        setTimeout(function () {
            this.changeClass($notice,"","hide");
        }, time);/* 延时隐藏提示信息 */
    },
    /**
     *  =changeClass  删除增加删除样式
     *
     *  @param    {dom}     $a
     *  @param    {string}  delete class
     *  @param    {string}  add class
     */

    // $a为dom节点，不是jq和zepto的节点
    changeClass: function($a, dlass, alass) {
        var s = 1, arr = [],
            dList = dlass.split(/\s+/g),
            aList = alass.split(/\s+/g);
        $a.getAttribute('class').split(/\s+/g).forEach(function(klass) {
            s = 1;
            dList.forEach(function(dlass) {
                if (klass === dlass) s = 0;
            });

            if (s) arr.push(klass);
        });

        aList.forEach(function (alass) {
            if (arr.indexOf(alass) === -1) {
                arr = arr.push(alass);
            }
        });

        $a.setAttribute('class', arr.join(" "));

        return $a;
    }

};

module.exports = Tool;