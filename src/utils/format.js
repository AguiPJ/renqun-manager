export const timeFormat = str => {
    if (str ){
        return  str.replace("@", " ").replace(/\./g, ":")
    }else {
        return ''
    }
}

export function dateFormat({format = "yyyy-MM-dd hh:mm:ss", date = undefined}) {
    // 传入两个参数  第一个是格式  第二个是时间  默认为空
    let _this
    if(!date){
        // 时间为空就创建当前时间
        _this = new Date();
    }else {
        _this = new Date(date)
    }
    let args = {
        // 获取时间的各个参数  年月日时分秒 以及相应的处理 如：月要+1
        "M+": _this.getMonth() + 1,
        "d+": _this.getDate(),
        "h+": _this.getHours(),
        "m+": _this.getMinutes(),
        "s+": _this.getSeconds(),
        "q+": Math.floor((_this.getMonth() + 3) / 3),  //quarter
        "S": _this.getMilliseconds()
    };
    if (/(y+)/.test(format))
        //重点来了！ /xxx/ 为正则表达式  建议百度下
        // .test() 正则匹配  如果匹配到返回 true  匹配不到返回false
        format = format.replace(RegExp.$1, (_this.getFullYear() + "").substr(4 - RegExp.$1.length));
    // RegExp.$1 == 第一个小括号中的表达式 == /(y+)/
    for (let i in args) {
        let n = args[i];
        if (new RegExp("(" + i + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? n : ("00" + n).substr(("" + n).length));
    }
    return format
}

