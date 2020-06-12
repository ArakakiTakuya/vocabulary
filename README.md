This was created during my time as a student at Code Chrysalis.<br>
(これはコードクリサリスの生徒のときに作りました。)

# Vocabulary

<img width="1439" alt="vocabulary-screenshot" src="https://user-images.githubusercontent.com/50431801/84504521-093b4400-acf7-11ea-865c-70170e3adafb.png">

# What is Vocabulary?

Vocabulary is an app which helps software engineer to learn English word related to tech.

<br>
(Vocabularyはソフトウェアエンジニアがテクニカルな英単語を学ぶのに役立つアプリです。)

<br>

# Development

## Database

This project assumes a Postgres database, also, this is not included in the package.json file, so must be installed separately.

Create a database called prima.

To clone and run this application, you'll need Git and Node.js (which comes with yarn) installed on your computer.

<br>
(このプロジェクトはデータベースとしてPostgresを使うことを想定しています。また最初はpackage.jsonファイルが含まれていないので。インストールする必要があります。)
<br><br>
(vocabularyというデータベースを作ってください。)
<br><br>
(このアプリをクローン、実行するためにGitとnode.jsが必要です。自身のコンピュータにインストールしてください。)

<br>

## Installation

<br>
1. Clone this repository

```
$ git clone https://github.com/ArakakiTakuya/vocabulary.git
```

<br>
2. Go to the repository

```
$ cd vocabulary
```

<br>
3. Install dependencies

```
$ yarn
```

<br>
4. Create database, Run migrations and set up the database

```
$ yarn migrate
```

<br>
5. Insert seed data into database

```
$ yarn seed
```

<br>
6. Run the app

```
$ yarn start
```

<br>
