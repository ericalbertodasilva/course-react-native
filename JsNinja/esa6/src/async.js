export function myPromesesOld(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Pronto");
        },2000);
    });
};
