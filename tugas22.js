function perulanganForEach(){
    let kalimatString = 'Saya ingin belajar bersama';
    let kalimatArray = kalimatString.split(' ');
    console.log(kalimatArray);
    kalimatArray.forEach(function(item,index){
        console.log(`Item : ${item} index ke ${index}`);
    })
}
perulanganForEach()
