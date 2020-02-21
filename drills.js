class _Node { 
  constructor(data, next){
    this.data = data; 
    this.next = next;
    // this.prev = prev;
  }
}


class Stack{
  constructor() {
    this.top = null; 
  }

  push(data) {
    if(this.top === null){
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data,this.top);
    this.top = node;
  }

  pop() {
    const node = this.top; 
    this.top = node.next;
    return node.data;
  }

  peek() {
   return this.top.data
  }

  isEmpty() {
    if(this.top === null)
      console.log("Stack is empty")
    else 
      console.log("Stack is not empty")
  }

  display() {
    let currNode = this.top; 
    let str = 'Top to bottom: ';
    while(currNode !== null){
      str = str + currNode.data + ',';
      currNode = currNode.next;
    }
    str = str.slice(0, -2);
    console.log(str)
  }
  sortDisplay() {
    let currNode = this.top; 
    let str = 'Smallest to Largest: ';
    while(currNode !== null){
      str = str + currNode.data + ',';
      currNode = currNode.next;
    }
    str = str.slice(0, -2);
    console.log(str)
  }
}
// #3
function is_padlindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,"");

  let newStack = new Stack()
  for(x = 0; x < s.length; x++){
    newStack.push(s[x])
  }
  let result = ""
  for(y = 0; y < s.length; y++){
    result = result + newStack.pop()
  }
  console.log(s===result)
}

// #4
function parentheses(s){
  let newStack = new Stack();
  for(let x=0; x < s.length; x++){
    newStack.push(s[x]);
  }
  let top = newStack.top;
  let bottom = newStack.top; 
  while(bottom.next !== null){
    bottom = bottom.next;
  }
  // console.log(top.data)
  // console.log(bottom.data)
  let close = top.data
  let open = bottom.data

  if((open === "(" && close === ")")||(open === "{" && close === "}")||(open === "[" && close === "]")){
    return 'All fine and dandy!';
  }

  else{
  let missing = '';
    if(open==='('){
      missing = ')'
    }
    if(open === '['){
      missing = ']'
    }
    if(open === '{'){
      missing = '}'
    }
    return `Oh no! We have a mismatch... correct closing '${missing}' current closing: ${close}`
  }
  
}

// #5
function sort(s) {
  let returnStack = new Stack()
  returnStack.push(s.pop())
  while(s.top!== null){
    let temp = s.pop();
    while(returnStack.top !== null && returnStack.peek() < temp ){
      s.push(returnStack.pop())
    }
    returnStack.push(temp)
  }
  return returnStack
} 

class _node { 
  constructor(data, next) { 
    this.data = data; 
    this.next = next;
  }
}

// #6
class Queue { 
  constructor() {
    this.first = null; 
    this.last = null; 
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node; 
    }
    if (this.last) {
      this.last.next = node; 
    }
    this.last = node;
  }

  dequeue() {
    if(this.first === null) {
      return; 
    }
    const node = this.first;
    this.first = this.first.next; 

    if(node === this.last) {
      this.last = null; 
    }
    return node.value; 
  }
}

function queuePeek(s) {
  return s.first.data
}

function queueEmpty(q) { 
  return (q.first === null);
}

function queueDisplay(q) {
  // Check if queue is empty
  queueEmpty(q);
  let currNode = q.first; 

  str = 'First to Last: '
  while(currNode){
    str = str + currNode.data + ', '
    currNode = currNode.next; 
  }
  console.log(str.slice(0,-2));
}


function SquareDance (person) { 
  queueEmpty(person)
  let maleQueue = new Queue() 
  let currNode = person.first; 
  let str = ''; 
  let maleCount = 0;

  while(currNode){ 
    if(currNode.data[0]==="M"){
      maleQueue.enqueue(currNode.data.slice(2))
      maleCount++; 
    }
    currNode = currNode.next
  }
  currNode = person.first
  while(currNode){ 
    if(currNode.data[0]==="F"){
      str = str + "Female dancer is " + currNode.data.slice(2) + 
      ", and the male dancer is " + maleQueue.first.data + '\n';
      maleQueue.dequeue();
      maleCount--;
    }
    // queueDisplay(maleQueue);
    currNode = currNode.next;
  }
  console.log(str)
  console.log(`There are ${maleCount} male dancers waiting to dance`)
}

function getRandomInt(min, max) { 
  min = Math.ceil(min);
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max-min)) + min; 
}

function Ophidian(people) { 
  let currPer = people.first

  while(currPer){
  let chance = getRandomInt(0,101);
    if(chance <= 25){ 
      console.log(currPer.data + '\'s paperwork is not quite right. It\'s back to the end of the queue. \n');
      people.enqueue(currPer.data)
      people.dequeue();
    }
    else{ 
      console.log(currPer.data + '\'s paperwork is just right! \n')
    }
    currPer = currPer.next;
  }
}

function main() {
  // const starTrek = new Stack();
  // const sortStack = new Stack();
  // const starTrek = new Queue();
  // const testQueue = new Queue();
  // const square = new Queue();
  const OphidianPer = new Queue(); 

  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy'); 
  // starTrek.push('Scotty');

  // starTrek.peek();
  // starTrek.isEmpty();
  // starTrek.display();
  // starTrek.pop();
  // starTrek.display();

  // is_padlindrome("dad");
  // is_padlindrome("A man, a plan, a canal: Panama");
  // is_padlindrome("1001");
  // is_padlindrome("Tauhida");

  // console.log(parentheses("(check)"));
  // console.log(parentheses("([check)]"));

  // sortStack.push(34);
  // sortStack.push(3);
  // sortStack.push(31);
  // sortStack.push(98);
  // sortStack.push(92);
  // sortStack.push(23);
  // // sortStack.display();

  // sort(sortStack).sortDisplay()

  // starTrek.enqueue('Kirk');
  // starTrek.enqueue('Spock');
  // starTrek.enqueue('Uhura');
  // starTrek.enqueue('Sulu');
  // starTrek.enqueue('Chekov');

  // // console.log(queuePeek(starTrek));
  // // console.log(queueEmpty(testQueue));
  // // console.log(queueEmpty(starTrek));
  // queueDisplay(starTrek);
  // starTrek.dequeue();
  // starTrek.dequeue();
  // queueDisplay(starTrek);

  // square.enqueue('F Jane');
  // square.enqueue('M Frank');
  // square.enqueue('M John');
  // square.enqueue('M Sherlock');
  // square.enqueue('F Madonna');
  // square.enqueue('M David');
  // square.enqueue('M Christopher');
  // square.enqueue('F Beyonce');

  // SquareDance(square);
  OphidianPer.enqueue('Jane');
  OphidianPer.enqueue('Frank');
  OphidianPer.enqueue('John');
  OphidianPer.enqueue('Sherlock');
  OphidianPer.enqueue('Madonna');
  OphidianPer.enqueue('David');
  OphidianPer.enqueue('Christopher');
  OphidianPer.enqueue('Beyonce'); 

  Ophidian(OphidianPer);
}
 
main()