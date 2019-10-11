class Fizzbuzz {
    private formInfo = [];
    private formInfoCounter: number = 0;
    max: number;
    min: number;
    constructor(min: string, max: string) {
        this.min = Number(min);
        this.max = Number(max);
    }
    // [forInfoに値を設定するためのInput要素を生成するメソッド]
    addForm(name: string, value: string) {
        const wrapper: HTMLElement = document.createElement('div');
        wrapper.className = 'wrapper';
        const inputName: HTMLInputElement = document.createElement('input');
        inputName.type = 'text';
        inputName.value = name;

        const inputValue: HTMLInputElement = document.createElement('input');
        inputValue.type = 'number';
        inputValue.min = '1';
        inputValue.value = value;

        wrapper.appendChild(inputName);
        wrapper.appendChild(inputValue);
        document.getElementById('formArea').appendChild(wrapper);

        this.formInfo.push({ text: name, value: Number(value) });

        const count: number = this.formInfoCounter;

        inputName.onchange = () => {
            this.formInfo[count].text = inputName.value;
            this.displyfizzbuzz();
        };
        inputValue.onchange = () => {
            this.formInfo[count].value = Number(inputValue.value);
            this.displyfizzbuzz();
        };

        this.formInfoCounter++;
    }

    setMin(Min) {
        this.min = Number(Min);
        this.displyfizzbuzz();
    }

    setMax(Max) {
        this.max = Number(Max);
        this.displyfizzbuzz();
    }
    // [formInfoのvalueの倍数が範囲内にあるかをcontainsを使って調べ、結果をfizzbuzzListに格納し
    // html上に表示するメソッド]
    displyfizzbuzz() {
        const container: HTMLElement = document.querySelector('#container ul');
        container.innerHTML = null;
        const contains: Array<number> = [];
        const fizzbuzzList: Array<string> = [];
        const min: number = this.min;
        const max: number = this.max;

        for (let i = min; i <= max; i++) {
            contains.push(i);
            fizzbuzzList.push(`<p>${i}</p>`);
        }

        this.formInfo.forEach(el => {
            for (let j = el.value; j <= max; j += el.value) {
                // findIndexはcontainsに値があるときその添字を返し、ないときは－１を返す
                const index: number = contains.findIndex(
                    (val: number) => val === j
                );
                if (index !== -1) {
                    // textが入れられたことがなければ中身を置き換える
                    if (fizzbuzzList[index] === `<p>${j}</p>`) {
                        fizzbuzzList[index] = `<p>${el.text}</p>`;
                    } else {
                        fizzbuzzList[index] =
                            fizzbuzzList[index] + `<p>${el.text}</p>`;
                    }
                }
            }
        });
        for (let i = 0; i <= max - min; i++) {
            const list: HTMLElement = document.createElement('li');
            list.innerHTML = fizzbuzzList[i];
            container.appendChild(list);
        }
    }
}
export default Fizzbuzz;
