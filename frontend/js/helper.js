window.addEventListener('DOMContentLoaded', (event)=>{
    getVisited();
})

const functionApi = '';

const getVisited = () => {
    let count = 131;
    fetch(functionApi).then(response =>{
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){ 
        console.log(error);
    });
    return count;
}