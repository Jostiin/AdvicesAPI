const API_URL = "https://api.adviceslip.com"
const btnGenerate = document.getElementById("btnA")

function GenerateAdvice(){
    
    fetch(`${API_URL}/advice`)
.then(response => response.json())
.then(data => {
    let advice = data.slip.advice
    let id = data.slip.id
    document.getElementById('advid').innerHTML = `ADVICE #${id}`;
    document.getElementById('advicetxt').innerHTML = `"${advice}"`
})
.catch(error => console.error(error))
}



