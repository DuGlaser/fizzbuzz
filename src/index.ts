import Fizzbuzz from './Fizzbuzz';

const RangeMin = <HTMLInputElement>document.getElementById('min-range');
const RangeMax = <HTMLInputElement>document.getElementById('max-range');

const fizzbuzz = new Fizzbuzz(RangeMin.value, RangeMax.value);
fizzbuzz.addForm('fizz', '3');
fizzbuzz.addForm('buzz', '5');
fizzbuzz.displyfizzbuzz();

// min-rangeが変更されたらクラスのminを更新する
RangeMin.addEventListener('change', () => {
    fizzbuzz.setMin(RangeMin.value);
});

// max-rangeが変更されたらクラスのmaxを更新する
RangeMax.addEventListener('change', () => {
    fizzbuzz.setMax(RangeMax.value);
});

// plusボタンを押したときにFormを追加する
document.querySelector('.fa-plus-square').addEventListener('click', () => {
    fizzbuzz.addForm('hoge', '2');
    fizzbuzz.displyfizzbuzz();
});
