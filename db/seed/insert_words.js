exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("words")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("words").insert([
        { en_meaning: "insert", ja_meaning: "を挿入する", level: "basic" },
        { en_meaning: "delete", ja_meaning: "を消去する", level: "basic" },
        { en_meaning: "add", ja_meaning: "を追加する", level: "basic" },
        { en_meaning: "remove", ja_meaning: "を取り除く", level: "basic" },
        { en_meaning: "run", ja_meaning: "を実行する", level: "basic" },
        { en_meaning: "implement", ja_meaning: "を実装する", level: "basic" },
        { en_meaning: "function", ja_meaning: "関数", level: "basic" },
        { en_meaning: "variable", ja_meaning: "変数", level: "basic" },
        { en_meaning: "migrate", ja_meaning: "を移行する", level: "basic" },
        { en_meaning: "swap", ja_meaning: "を交換する", level: "basic" },
        { en_meaning: "declare", ja_meaning: "を宣言する", level: "basic" },
        { en_meaning: "assign", ja_meaning: "を割り当てる", level: "basic" },
        { en_meaning: "submit", ja_meaning: "を提出する", level: "basic" },
        { en_meaning: "send", ja_meaning: "を送る", level: "basic" },
        { en_meaning: "receive", ja_meaning: "を受け取る", level: "basic" },
        { en_meaning: "parentheses", ja_meaning: "丸括弧", level: "advance" },
        { en_meaning: "brackets", ja_meaning: "角括弧", level: "advance" },
        { en_meaning: "braces", ja_meaning: "波括弧", level: "advance" },
        { en_meaning: "invoke", ja_meaning: "を呼び出す", level: "advance" },
        { en_meaning: "execute", ja_meaning: "を実行する", level: "advance" },
        {
          en_meaning: "initialize",
          ja_meaning: "を初期化する",
          level: "advance",
        },
        { en_meaning: "configure", ja_meaning: "を設定する", level: "advance" },
        { en_meaning: "verify", ja_meaning: "を確認する", level: "advance" },
        { en_meaning: "authentication", ja_meaning: "認証", level: "advance" },
        { en_meaning: "credential", ja_meaning: "資格情報", level: "advance" },
        { en_meaning: "clause", ja_meaning: "句", level: "advance" },
        { en_meaning: "exponent", ja_meaning: "指数", level: "advance" },
        {
          en_meaning: "deterministic",
          ja_meaning: "決定論的な",
          level: "advance",
        },
        { en_meaning: "condition", ja_meaning: "条件", level: "advance" },
        { en_meaning: "allot", ja_meaning: "割り当てる", level: "advance" },
      ]);
    });
};
