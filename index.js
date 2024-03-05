


document.getElementById('bold-field').addEventListener('click',function(){
  const textField = document.getElementById('text-field');
  textField.style.fontWeight='    Bold';
})
document.getElementById('italic-field').addEventListener('click',function(){
  const textField = document.getElementById('text-field');
  textField.style.fontStyle='Italic';
})
document.getElementById('underline-field').addEventListener('click',function(){
  const textField = document.getElementById('text-field');
  textField.style.textDecoration='Underline';
})

document.getElementById('left-field').addEventListener('click',function(){
  const textField = document.getElementById('text-field');
  textField.style.textAlign='left';
})
document.getElementById('right-field').addEventListener('click',function(){
  const textField = document.getElementById('text-field');
  textField.style.textAlign='right';
})

document.getElementById('center-field').addEventListener('click',function(){
  const textField = document.getElementById('text-field');
  textField.style.textAlign='Center';
})
document.getElementById('justify-field').addEventListener('click',function(){
  const textField = document.getElementById('text-field');
  textField.style.textAlign='Justify';
})

document.getElementById('font').addEventListener('click',function(){
  const textField = document.getElementById('text-field');
  textField.style.textTransform='Uppercase';
})
document.getElementById('favColor').addEventListener('input',function(){
  const textField = document.getElementById('text-field');
  const color=this.value ;
  textField.style.color=color;
})