const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const tutorialsArr= tutorials.map((tutorial)=> tutorial.split(''));
  
  function upperCaseFunc(tutorialsArr) {
    let arr=[];
    for(const element of tutorialsArr){
      arr.push(element.charAt(0).toUpperCase() + element.slice(1));

  }
  return arr.join('');
}
return tutorialsArr.map( arr => upperCaseFunc(arr));
}
