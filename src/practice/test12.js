// JSONPlaceholderの投稿データを取得するAPIのURL
const apiUrl = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=0790177";

// fetch関数でAPIからデータを取得する
fetch(apiUrl)
  .then((response) => {
    console.log(response);
    // レスポンスのステータスを確認
    if (response.status !== 200) {
      throw new Error(`HTTPエラー! ステータス: ${response.status}`);
    }

    // JSONデータを解析してPromiseを返す
    return response.json();
  })
  .then((results) => {
    // 取得したデータをコンソールに表示
    console.log("取得したデータ:", results);

    // データを使って何かしらの処理を行うことができます
    // この例では、各投稿のタイトルをコンソールに表示しています
  })
  .catch((error) => {
    // エラーハンドリング
    console.error("エラーが発生しました:", error);
  });
