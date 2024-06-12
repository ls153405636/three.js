onmessage = (e) => {
    console.log(e.data);
    let arr = e.data
    let newArr = arr.filter((a) => {
        return a%2===0
        
    })
    setTimeout(() => {
        postMessage(newArr)
    }, 1000);
}