const articles = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    author: "John Doe",
    likes: 777,
    comments: ["Great article!", "Thanks for sharing."],
  },
  {
    id: 2,
    title: "React Fundamentals",
    author: "Jane Smith",
    likes: 220,
    comments: ["Awesome!", "Helped me a lot."],
  },
  {
    id: 3,
    title: "Node.js in Practice",
    author: "Sam Johnson",
    likes: 300,
    comments: ["Looking forward to trying it out."],
  },
  // ... 他の記事も同様に続く
];

//likesの最大値をもつオブジェクトを返す
//likesを比較していき、大きいオブジェクトを返す

const findMostLikedArticle = (articles) => {
  let maxLiked = {};

  articles.forEach((article, index) => {
    if (index === 0) {
      maxLiked = articles[0];
    } else if (maxLiked.likes < article.likes) {
      {
        maxLiked = article;
      }
    }
  });
  return maxLiked;
};

const increaseLikes = (id, addLikes) => {
  //idが一致する要素を探す
  articles.forEach((article) => {
    if (article.id === id) {
      article.likes += addLikes;
    }
  });
  //要素の中のlikesにaddLikesを足す
  return articles;
};

const addComment = (id, newComment) => {
  //idが一致する要素を探す
  articles.forEach((article, index) => {
    if (article.id === id) {
      //任意のidを持つ要素内配列に追加する
      article.comments.push(newComment);
    }
  });
  return articles;
};

const addLikes = increaseLikes(2, 1000);
const mostLiked = findMostLikedArticle(articles);
const Comment = addComment(3, "最高！！");
console.log(articles);
console.log(mostLiked);
//console.log(addLikes);
