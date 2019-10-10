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

        this.updateFormInfo(inputName);
        this.updateFormInfo(inputValue);

        this.formInfoCounter++;
    }

    updateFormInfo(target: HTMLInputElement) {
        target.onchange = () => {
            this.formInfo[this.formInfoCounter].text = target.value;
            this.displyfizzbuzz();
        };
    }
    displyfizzbuzz() {}
}
export default Fizzbuzz;
