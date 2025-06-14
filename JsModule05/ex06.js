const animals = ["dog","cat","dog","bird","cat","dog"];

function main(){
    const count = animals.reduce((acc,animal) =>{
        if(acc[animal]){
            acc[animal] +=1;
        } else{
            acc[animal] = 1;
        }
        return acc;
    },{});
    console.log(count);
}

main();