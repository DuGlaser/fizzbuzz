class Fizzbuzz {
    private formInfo = [];
    private formInfoCounter: number = 0;
    max: number;
    min: number;
    constructor(min: string, max: string) {
        this.min = Number(min);
        this.max = Number(max);
    }

    addForm(name: string, value: string) {
        const inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.value = name;

        const inputValue: HTMLInputElement = document.createElement('input');
        inputValue.type = 'number';
        inputValue.value = value;

        document.getElementById('formArea').appendChild(inputName);
        document.getElementById('formArea').appendChild(inputValue);

        this.formInfo.push({ text: name, num: Number(value) });
        inputName.onchange = () => {
            this.updateFormInfo(inputName);
        };
        inputValue.onchange = () => {
            this.updateFormInfo(inputValue);
        };

        this.formInfoCounter++;
    }

    displyfizzbuzz() {}
}
export default Fizzbuzz;
