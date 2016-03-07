/**
 * Created by BennetWang on 2015/10/10.
 */
var config = {
    "RequestBaseUrl": "",//用于本地应用开发,请忽删除,相关问4s
    "AvatarUrlDomain": "http://Totoro:6003/Base-Module/Annex/Avatar",
    "LogoUrlDomain": "http://Totoro:6003/Base-Module/Annex/Avatar",
    "ChatRoomAvatarUrlDomain": "http://Totoro:6003/Base-Module/Annex/ChatRoomAvatar",
    "DefaultLanguage": "ja",
    "ChatAttachmentPath": "http://goldenmonkey.totoro.com:20001/launchr/",
    "MixpanelOpen": false, //是否启用Mixpanel,true=开启,false=关闭,默认关闭
    "MixpanelToken": "",//对应Mixpanel的Token
    "IsChristmas": 0,
    "IsAllDay": 1,
    "SupportCenter": "https://launchr.zendesk.com",
    "LaunchrUrlDomain": "totoro.com",//展示平台根域名
    "OfficialUrl": "http://Totoro:6006",//官网网址
    "SelectMap": '1',//选择地图,0=Google,1=Baidu
    "BaiduAk": 'aTPMy3v8P8N5RXs5xlZhL1io', //Baidu Map Ak
};
(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(global, global.document);
    } else {
        factory(global);
    }
}(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
    if (noGlobal) {
        window.config = config;
    }
    return config;
}));
