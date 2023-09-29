const row = document.querySelector("#row")


function getProducts() {

    fetch("https://6427fbdc46fd35eb7c492488.mockapi.io/student", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => innerProduct(data))
        .catch(error => console.log(error))
}

getProducts();

let html = "";

function innerProduct(data) {
    data.forEach(element => {
        html += ` <div class="card">
        <div><img src="./img/список желаемого.png"></div>
        <img src="${element.url?element.url:"..."}" class = "imggg">
        <h4 class="tc">${element.title?element.title:"..."}</h4>
        <h6 class="pc">${element.name?element.name:"..."}</h6>
        <h5 class="cn">${element.price?element.price:"..."}</h5>
        <h5 class="sizes">Размеры</h5>
        <div class="snn">
            <div>
                <h4 class="sizenames">ШИРИНА</h4>
                <h4 class="sizess">${element.width?element.width:0} СМ</h4>
            </div>
            <h6 class="sx">x</h6>
            <div>
                <h4 class="sizename">ГЛУБИНА</h4>
                <h4 class="size">${element.depth?element.depth:0} СМ</h4>
            </div>
            <h6 class="sx">x</h6>
            <div>
                <h4 class="sizename">ВЫСОТА</h4>
                <h4 class="size">${element.heigth?element.heigth:0} СМ</h4>
            </div>
        </div>
        <button class="bc"> <a href="./3.html">Добавить в корзину</a></button>
    </div>
     `
     console.log(element)

    });
 
    row.innerHTML = html

}