/* storage.js
 * 专门负责数据保存与读取的文件。
 * 使用浏览器 localStorage，数据会保存在用户当前设备的浏览器里，
 * 关闭网页、重新打开链接后数据依然还在（除非手动清除浏览器数据）。
 */

const STORAGE_KEY = 'my-file-editor:files-v1';

/** 从本地读取所有文件，读取失败或从未保存过时返回空数组 */
function loadFilesFromStorage(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    console.error('读取本地数据失败：', e);
    return [];
  }
}

/** 把所有文件写入本地，返回是否保存成功 */
function saveFilesToStorage(files){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(files));
    return true;
  }catch(e){
    console.error('保存本地数据失败：', e);
    return false;
  }
}
