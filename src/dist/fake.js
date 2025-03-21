const crypto = require('crypto');

// 机场的地址url
var wangzhangurl = "https://app.starl.xyz";
// 登录页面背景图
var loginBackgroundImageUrl = 'https://cdn.manyacg.top/thumb/twitter/3071055854/67d14c8a822d5d800fbbcbd4_thumb.avif';
// 登录后的背景图
var headBackgroundImageUrl = 'https://cdn.manyacg.top/regular/pixiv/564736/67d0ee39822d5d800fbbc9ba_regular.webp';
// 存储网站授权码  不懂勿动
var license_key;

// SHA1哈希函数
function sha1(data) {
    return crypto.createHash('sha1').update(data).digest('hex');
}

// 计算License并更新变量
function calculateLicense() {
    const firstHash = sha1(wangzhangurl);
    const combined = firstHash + "1145141919";
    license_key = sha1(combined); // 直接更新license_key变量
    console.log('License:', license_key);
}

calculateLicense();

function updateBackgroundImage(elementClass, imageUrl) {
    var elements = document.querySelectorAll(elementClass);
    elements.forEach(function(elem) {
        elem.style.backgroundImage = 'url("' + imageUrl + '")';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // 初始设置背景图像
    updateBackgroundImage('.head___1MReR', headBackgroundImageUrl);
    updateBackgroundImage('.login___SuG13', loginBackgroundImageUrl);

    // 每隔5秒更新背景图像
    setInterval(function() {
        updateBackgroundImage('.head___1MReR', headBackgroundImageUrl);
        updateBackgroundImage('.login___SuG13', loginBackgroundImageUrl);
    }, 200); // 5000毫秒 = 5秒
});
