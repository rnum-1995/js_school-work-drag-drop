//ドラッグアイテムを全て取得
const items = document.querySelectorAll('.item');
//ドラッグエリアを全て取得
const areas = document.querySelectorAll('.area');

console.log(items, areas);

//1.ドラッグアイテムの設定
items.forEach(item => {
  item.addEventListener('dragstart', (e) => {
    //ドラッグされているアイテムのidを保存
    console.log(item.id);
    e.dataTransfer.setData('text/plain', item.id);
    item.style.opacity = '0.3';
  });
  //ドラッグが終わったら不透明度を元に戻す
  item.addEventListener('dragend', (e) => {
    item.style.opacity = '1';
  });
});

//2.ドロップエリアの設定
areas.forEach(area => {
  area.addEventListener('dragover', (e) => {
    //デフォルトの挙動をキャンセルしてドロップ可能にする
    e.preventDefault();
    area.classList.remove('bg-light');
    area.classList.add('bg-white');
  });

  area.addEventListener('dragleave', (e) => {
    e.preventDefault();
    area.classList.add('bg-light');
    area.classList.remove('bg-white');
  });

  area.addEventListener('drop', (e) => {
    e.preventDefault();
    //Datatransferに保存しているidを取り出す
    const id = e.dataTransfer.getData('text/plain');
    const dragItem = document.getElementById(id);
    console.log(dragItem);
    //ドロップされた要素をドロップエリアへ移動（追加）
    if (dragItem) {
      area.append(dragItem);
    }
  })
});