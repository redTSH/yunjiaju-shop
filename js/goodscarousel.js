/*
 * 商品轮播特效
 * 日期：2020年11月29日
 */
(function () {
    var leftBtn = document.getElementById('goods_left_btn');
    var rightBtn = document.getElementById('goods_right_btn');
    var goods_list = document.getElementById('goods_list');

    // 位置标识符
    var idx = 0;

    // 右按钮点击监听
    rightBtn.onclick = function () {
        idx++;
        if (idx >= 5) idx = 5;
        goods_list.style.left = idx * -221 + 'px';
    }

    // 左按钮点击监听
    leftBtn.onclick = function () {
        idx--;
        if (idx <= 0) idx = 0;
        goods_list.style.left = idx * -221 + 'px';
    }
})()