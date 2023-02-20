// צרו ריבוע לפי מספר מהמשתמש

var answer = prompt('Please Enter A Number \n')
var num = ''
for (let i = 0; i < answer; i++) {
    var x = '****' + '\n'
    num += x
}
console.log(num)