(function () {
    var recommend_list = document.getElementById('recommend_list');
    var recommend_left_btn = document.getElementById('recommend_left_btn');
    var recommend_right_btn = document.getElementById('recommend_right_btn');

    var idx = 0;

    // 右按钮点击监听
    recommend_right_btn.onclick = function () {
        idx++;
        if (idx >= 6) idx = 6;
        recommend_list.style.left = idx * -370 + 'px';
    }

    // 左按钮点击监听
    recommend_left_btn.onclick = function () {
        idx--;
        if (idx <= 0) idx = 0;
        recommend_list.style.left = idx * -370 + 'px';
    }
})()