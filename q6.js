// עם מערך התלמידים צרו "תוכנת חיפוש" שבה המשתמש מזין שם והתוכנה אומרת אם התלמיד נמצא במערך.

var answer = prompt('Please Enter A Name \n')
const name = ['Yossi','Nadav','Yair','Avishai','Moosh']

for (let i= 0; i < name.length; i++) {
    if (answer == name[i]) {
        console.log("found") 
    }    
}
console.log("not found")
