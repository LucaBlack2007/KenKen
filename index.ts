enum Operation {
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE,
    EQUAL
}

class Section {
    operation: Operation;
    number: number;
    chunk: number;
    answer: number;

    constructor(
        operation: Operation,
        number: number,
        chunk: number
    ) {
        this.operation = operation;
        this.number = number;
        this.chunk = chunk;
        this.answer = 0;
    }

    setAnswer(answer: number): void {
        this.answer = answer;
    }   
}

const puzzle = [

    new Section(Operation.DIVIDE, 2, 0), new Section(Operation.DIVIDE, 2, 0), new Section(Operation.ADD, 7, 1), new Section(Operation.EQUAL, 4, 2),
    new Section(Operation.SUBTRACT, 1, 3), new Section(Operation.SUBTRACT, 3, 4), new Section(Operation.ADD, 7, 1), new Section(Operation.SUBTRACT, 2, 5),
    new Section(Operation.SUBTRACT, 1, 3), new Section(Operation.SUBTRACT, 3, 4), new Section(Operation.MULTIPLY, 4, 6), new Section(Operation.SUBTRACT, 2, 5),
    new Section(Operation.SUBTRACT, 1, 7), new Section(Operation.SUBTRACT, 1, 7), new Section(Operation.MULTIPLY, 4, 6), new Section(Operation.MULTIPLY, 4, 6)

]

function printPuzzle() {
    let str = ""
    for (let i = 0; i < puzzle.length; i++) {
        if (i % 4 === 0 && i !== 0) str += "\n"
        str += puzzle[i].answer + " ";
    }

    console.log(str)
}

function freeNumbers() {
    puzzle.forEach(section => {
        if (section.operation == Operation.EQUAL) section.setAnswer(section.number);
    })
}

function highestChunk(): number {

    let highNumber: number = 0;
    puzzle.forEach(section => {
        if (section.number > highNumber) highNumber = section.number;
    })

    return highNumber+1;
}

console.log(highestChunk())

function possibleNumbers() {
    
    let ls: number[][] = [];
    for (let i: number = 0; i < highestChunk(); i++) ls.push([]);
    for (let i: number = 0; i < highestChunk(); i++) {
      //  console.log(ls)
        puzzle.forEach(section => {
            ls[section.chunk].push(section.number);
        })
    }
    console.log(ls)
}

freeNumbers();
possibleNumbers();

printPuzzle();
