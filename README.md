# fizzbuzz
## class Fizzbuzzz`
### variable
|変数名|説明|
|------|----|
|formInfo|addFormで生成したInputの値を格納|
|formInfoCounter|何回AddFormをしたかを記録|
|min|求める範囲の最小値|
|max|求める範囲の最大値|

### addForm
fizzbuzzの設定を行うFormを生成します
* inputNameにはFizzbuzzで表示したい文字列
* inputValueにはなんの倍数のときにfizzbuzzを表示する

かを設定できます

### setMin
最小値を設定します
htmlの最小値を設定する要素が変更されたら実行されます

### setMax
最大値を設定します
htmlの最大値を設定する要素が変更されたら実行されます

### displayFizzbuzz
addFormで生成した要素の内容と範囲をもとに画面上にdiv#containerの中にfizzbuzzを表示します
