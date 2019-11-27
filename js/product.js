// let listproduct = [
//     ["tung","hoc code"]
// ];

// function add(){
//     let danhmuc =  document.getElementById('danhmuc').value;
//     let  name = document.getElementById('sanpham').value;
//     let sp =[name,danhmuc]
//     listproduct.push(sp);
//     showProduct();
// } 

this.addProduct = function () {
    let product = document.getElementById("newProduct").value;
    if (product === "") {
        alert("Vui long nhap vao ten.");
    } else {
        this.listProducts.push([product, ,]);
        this.setLocalStorageListProducts();
        return this.displayProductsAdmin();
    }
};

function logOut() {
    console.log('hahaha')
}


let products = function () {
    //list product
    this.listProducts = [
        ["tung", "hoc code"]
    ];
    //add
    this.addProduct = function () {
        let danhmuc = document.getElementById('danhmuc').value;
        let name = document.getElementById('sanpham').value;
        let sp = [name, danhmuc]
        this.listProducts.push(sp);
        this.showProduct();
    }
    //edit
    this.edit = function () {
        

    }
    this.delete = function (i) {
        this.listProducts.splice(i,1);
       this.showProduct();
    }
    this.showProduct = function () {
        let sout = '';
        for (i = 0; i < this.listProducts.length; i++) {
            sout += '<ul class ="danhsach-item">';
            sout += '<li>' + (i + 1) + '</li>';
            sout += '<li>' + this.listProducts[i][0] + '</li>';
            sout += '<li>' + this.listProducts[i][1] + '</li>';
            sout += '<li><button class="button" type="button" onclick="deleteSp('+i+')" value="Xoa">Xoa</button>'
            sout += '</ul>';
        }
        document.getElementById('result').innerHTML = sout;
    }
}
let pro = new products();


//product


function show() {
    pro.showProduct();

}

function deleteSp(i){
    pro.delete(i);
}

function add(){
    pro.addProduct();
}


