

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

let products = function () {
    //list product
    this.listProducts = [
        ["tung", "hoc code","C:\Users\NTT\Desktop","30","200.000"]
    ];
    //add
    this.addProduct = function () {
        let danhmuc = document.getElementById('danhmuc').value;
        let name = document.getElementById('sanpham').value;
        let anh = document.getElementById('anh').value;
        let soluong = document.getElementById('soluong').value;
        let dongia = document.getElementById('dongia').value;
        let sp = [name, danhmuc, anh, soluong, dongia]
        if (danhmuc === "" && name === "") {
            alert("Vui long nhap vao ten.");
        } else {
        this.listProducts.push(sp);
        this.showProduct();
        }
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
            sout += '<li style="width:60px;">' + (i + 1) + '</li>';
            sout += '<li style="width:250px;">' + this.listProducts[i][0] + '</li>';
            sout += '<li style="width:200px;">' + this.listProducts[i][1] + '</li>';
            sout += '<li style="width:200px;">' + this.listProducts[i][2] + '</li>';
            sout += '<li style="width:200px;">' + this.listProducts[i][3] + '</li>';
            sout += '<li style="width:130px;">' + this.listProducts[i][4] + '</li>';
            sout += '<li><button class="button" type="button" onclick="deleteSp('+i+')" style="float: right;">Xoa</button>'
            sout += '<li><button class="button" type="button" onclick="deleteSp('+i+')" style="float: right;">Sửa</button>'
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


