!SLIDE

## Immutable Infrastructureとは？

 - 一度作った環境にアップデートを加える事はしない
 - バージョンアップの際には、環境ごと再構築する

!SLIDE

## 何がうれしいの？

 - 確実に動作する環境を用意し続けることができる
     - デプロイされるのは運用されている物のみ
 - バグの分析に役立つ
     - バグった瞬間を保存できるので、環境の再現が楽
 - 連携するツールが多いのでお手軽に作れる
     - Chef
     - Docker
     - あとで紹介します

!SLIDE

## リソース使いそう

 - 環境構築の「時間リソース」は、ベースになる環境を持っておくことで軽減できる
     - AWSのAMIとか
     - DockerならContainer
     - VagrantならBox

!SLIDE

## リソース使いそう

 - ハードディスクなどの「容量リソース」は、ムーアの法則で
     - 利用しない環境は即刻削除
     - あるいは世代管理をする

!SLIDE

## 実現方法

 - [Chef](http://www.getchef.com/chef/)
 - [Docker](https://www.docker.io/)
 - [Vagrant](http://www.vagrantup.com/)

詳細は次のスライドで