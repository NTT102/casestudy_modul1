//login
function check() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username == "admin" && password == "123123") {
        alert("đăng nhập thành công")
        return true;
        //    return window.location = "product.html";
    } else {
        alert("sai tên đăng nhập hoặc mật khẩu");
        return false;
    }

}


let products = function () {
    //list product
    this.listProducts = [
        {
            name: 'Iphone 6',
            cate: 'Apple',
            image: 'iphone_6.jpg',
            total: 30,
            price: '8.000.000',
            status: 'true',
        },
        {
            name: 'samsung galaxy A30s',
            cate: 'Samsung',
            image: 'Samsung_A30s.png',
            total: 15,
            price: '6.500.000',
            status: 'true',
        },
        {
            name: 'oppo RENO 2',
            cate: 'Samsung',
            image: 'Oppo_reno2.png',
            total: 18,
            price: '14.000.000',
            status: 'true',
        },
        {
            name: 'Pin sạc dự phòng Li-on 10.000mAh',
            cate: 'phụ kiện',
            image: 'Pin_lion.jpg',
            total: 15,
            price: '1.450.000',
            status: 'true',
        }
    ];

    //saveStore
    this.saveStore = function () {
        sessionStorage.setItem('products', JSON.stringify(this.listProducts));
    }
    //add
    this.addProduct = function () {
        let cate = document.getElementById('danhmuc').value;
        let name = document.getElementById('sanpham').value;
        let image = document.getElementById('anh').files[0].name;
        let total = document.getElementById('soluong').value;
        let price = document.getElementById('dongia').value;
        let status = document.getElementById('status').value;
        if (cate === "" || name === "" || image === "" || total === "" || price === "") {
            alert("Vui long nhập đủ thông tin.");
        } else {
            this.listProducts.push({ name, cate, image, total, price, status });
            this.saveStore();
            this.showProduct();
        }
    }
    //edit
    this.edit = function (i) {
        document.getElementById("product-" + i).contentEditable = true;
        this.saveStore();
    }
    //delete
    this.delete = function (i) {
        if ( confirm("bạn chắc muốn xoá chứ?") == true) {
            this.listProducts.splice(i, 1);
        }
        this.saveStore();
        this.showProduct();
    }
    // show
    this.save = function (i) {
        let value = document.getElementById("product-" + i).children
        let arr = [];
        for (let i = 0; i < value.length; i++) {
            arr.push(value[i].textContent)
        }
        let spEdit = { name: arr[1], cate: arr[2], image: arr[3], total: arr[4], price: arr[5], status: arr[6] }
        this.listProducts[i] = spEdit
        this.saveStore();
        this.showProduct();
    }

    this.showProduct = function () {
        let sout = '';
        let productStore = JSON.parse(sessionStorage.getItem("products"));
        if (productStore) {
            this.listProducts = productStore;
        }
        for (i = 0; i < this.listProducts.length; i++) {
            sout += '<ul class ="danhsach-item" id="product-' + i + '">';
            sout += '<li style="width:60px;">' + (i + 1) + '</li>';
            sout += '<li style="width:250px;">' + this.listProducts[i].name + '</li>';
            sout += '<li style="width:200px;">' + this.listProducts[i].cate + '</li>';
            sout += '<li style="width:200px;">' + '<a target="_blank" href="D:/casestudy_modul1/img/' + this.listProducts[i].image + '" > ' + this.listProducts[i].image + ' </a>' + '</li>';
            sout += '<li style="width:200px;">' + this.listProducts[i].total + '</li>';
            sout += '<li style="width:130px;">' + this.listProducts[i].price + '</li>';
            sout += '<li style="width:130px;">' + this.listProducts[i].status + '</li>';
            sout += '<li><button class="btn" type="button" onclick="deleteSp(' + i + ')">Xoá</button>';
            sout += '<li><button class="btn" type="button" onclick="editSp(' + i + ')">Sửa</button>';
            sout += '<li><button class="btn" type="button" onclick="saveSp(' + i + ')">Save</button>';
            sout += '</ul>';
        }
        this.saveStore();
        document.getElementById('result').innerHTML = sout;
    }
}
let pro = new products();


//product


function show() {
    pro.showProduct();

}

function deleteSp(i) {
    
    pro.delete(i);
}

function add() {
    pro.addProduct();
    return window.location = "product.html";
}

function editSp(i) {
    pro.edit(i);
}

function saveSp(i) {
    pro.save(i);
}



