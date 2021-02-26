/*
 * 轮播图特效
 * 日期：2020年11月29日
 */
(function () {
    var carousel = document.getElementById('carousel');
    var banner = document.getElementById('banner');
    var circle = document.getElementById('circle');
    var circle_lis = circle.getElementsByTagName('li');

    // 复制第一张图片
    var clone_li = carousel.firstElementChild.cloneNode(true);
    // 上树
    carousel.appendChild(clone_li);

    // 定义图片标识符
    var idx = 0;
    // 定义定时器
    var timer;
    setCircle();
    timer = setInterval(moveOn, 2000);
    function moveOn() {
        idx++;
        // 添加动画
        carousel.style.transition = 'transform .5s ease 0s';
        // 拉动
        carousel.style.transform = 'translateX(' + -25 * idx + '%)';
        if (idx == 3) {
            // 设定定时器让动画先跑完再瞬到第一张
            setTimeout(function () {
                // 取消动画
                carousel.style.transition = 'none';
                // 瞬移到第一张
                carousel.style.transform = 'translateX(' + -25 * 0 + '%)';
                // 图片标识符归零
                idx = 0;
            }, 500);
        }
        setCircle();
    }

    // 鼠标进入监听
    banner.onmouseenter = function () {
        clearInterval(timer);
    };
    // 鼠标划出监听
    banner.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(moveOn, 2000);
    }

    // 设置小圆点
    function setCircle() {
        // 遍历
        for (var i = 0; i < circle_lis.length; i++) {
            if (i == idx % 3) {
                circle_lis[i].className = 'current';
            } else {
                circle_lis[i].className = '';
            }
        }
    }

    // 小圆点点击监听
    circle.onclick = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            var n = e.target.getAttribute('data-n');
            idx = n;
            carousel.style.transform = 'translateX(' + -25 * idx + '%)';
            setCircle()
        }
    }
})()