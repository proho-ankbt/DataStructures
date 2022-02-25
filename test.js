const d = new Dijkstra([
    [ 0,  0, 25,  7, 15,  6,  5],
    [ 5,  0,  8, 11,  9,  0,  1],
    [ 0, 12,  0, 16, 14,  0,  6],
    [ 0, 29,  4,  0,  0, 22,  0],
    [31,  4,  5, 11,  0,  0,  4],
    [ 0,  0,  9,  0, 16,  0,  0],
    [12,  3,  4,  0,  0,  0,  0],
]);


document.addEventListener('click',()=>{  
    console.log("Started");
    console.log(d.calculate(2, 5));
    console.log("Ended")
})
