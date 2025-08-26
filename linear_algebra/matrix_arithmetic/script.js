function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function matrix_addition() {
    matAa = document.querySelectorAll("#addition .matA .number");
    matBa = document.querySelectorAll("#addition .matB .number");
    matCa = document.querySelectorAll("#addition .matC .number");

    let i=0; 
    for(let i=0; i<matAa.length; i++){
        matAa[i].classList.add("animate"); matBa[i].classList.add("animate"); 
        await sleep(1500); 
        matCa[i].classList.add("animate"); 
        
        matAa[i].classList.remove("animate"); matBa[i].classList.remove("animate");
        await sleep(1500);
        matCa[i].classList.remove("animate"); 
    }

}

async function matrix_subtraction() {

    matAs = document.querySelectorAll("#subtraction .matA .number");
    matBs = document.querySelectorAll("#subtraction .matB .number");
    matCs = document.querySelectorAll("#subtraction .matC .number");

    let i=0; 
    for(let i=0; i<matAa.length; i++){
        matAs[i].classList.add("animate"); matBs[i].classList.add("animate"); 
        await sleep(1500); 
        matCs[i].classList.add("animate"); 
        
        matAs[i].classList.remove("animate"); matBs[i].classList.remove("animate");
        await sleep(1500);
        matCs[i].classList.remove("animate");
    }

}

