/* 
「DOM操作の復習」
左側のアイテムをクリックしたら右側に、右側のアイテムをクリックしたら左側に移動するように script.js を実装してみよう

・ヒント1
まずはクリックしたアイテムが右側へ移動するようにしてみる

・ヒント2
クリックしたアイテムが、左右どちらのエリアにいるのか調べる
*/

const items = document.querySelectorAll('.item');
//右のエリアを取得
const areaRight = document.getElementById('area-right');
//左のエリアを取得
const areaLeft = document.getElementById('area-left');

items.forEach(item => {
    //全てのアイテムにクリックイベントを登録
    item.addEventListener('click', (e) => {
        let selectItem = e.target;
        let currentArea = e.target.parentElement;
        if (currentArea === areaLeft) {
            //現在地が左なら右に追加
            areaRight.append(selectItem);
        } else {
            //現在地が右なら左に追加
            areaLeft.append(selectItem);
        }

        //お手本
        // if (currentArea.id === 'area-left') {
        //     //現在地が左なら右に追加
        //     areaRight.append(selectItem);
        // } else {
        //     //現在地が右なら左に追加
        //     areaLeft.append(selectItem);
        // }
    });
});

