!SLIDE

## Dockerを使ってみた

!SLIDE

![](docker/deploy.png)

!SLIDE

 1. 開発
 2. リポジトリにcommit,push
 3. Jenkinsでビルド、テスト
 4. JenkinsでDockerのimageを作成
 5. imageをtar.gzで出力
 6. 本番用ホストで実行

!SLIDE

![](docker/run.png)

!SLIDE

 - DNSやLoad Balancerで参照する仮想マシン（プロセス）を変更する
 - アップデートで、新しい仮想マシンを立ち上げて、古いのは殺す
 - DNS,Load Balancerの設定を変更する

!SLIDE

## メリット
 
 - 一つのホストでロードバランシングの完結ができる
     - VPSのレンタル代削減
 - 環境構築がお手軽になる

!SLIDE

## デメリット

 - 動作中の仮想マシンに手出しはできない
     - バグ発生→対応、デプロイまでを高速化する必要がある
 - 死んでいった仮想マシンが溜まっていく
     - cronとかで削除をするべし

!SLIDE

Dockerを使って、強制的にメンテ、デプロイの高品質な高速化を目指しましょう