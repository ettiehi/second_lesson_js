// צרו את לוח הכפל באמצעות  JAVASCRIPT. הדגישו (באמצעות javascript) את המספרים 50,100,72

const double = []
for (let j = 1; j < 11; j++) {
    let num=" "
    for (let i = 1; i < 11; i++) {
        double [i]=[]
        double[i][j]=i*j
        if (double[i][j] == 50 || double[i][j] == 72 ||double[i][j] == 100 ) {
            num+= " " +"*"+double[i][j]+"*" 
        } else
        num+= " " +double[i][j] 
    } 
   console.log(num)
}

