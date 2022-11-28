const createProductItemTemplate = (product) => `
    <a href='/kasir/#/manage/product/${product.product_id}' class="border-bottom">
        <div class="col-12 d-flex align-items-center product-items">
            <img src="${product.product_image}" alt="Ka">
            <div class="name-price w-100">
                <p class="name">${product.product_name}</p>
                <p class="price">Rp ${product.product_price}</p>
            </div>
            <div class="stok text-center ps-2 pe-2">
                <p>Stok</p>
                <p>${product.stock}</p>
            </div>
        </div>
    </a>
`;

const createDetailProduct = (product) => `
    <div class="row g-3">
        <div class="col-md-12">
            <img src="${product.product_image}">
        </div>
        <div class="col-md-12">
            <label for="formFile" class="form-label">Foto Produk</label>
            <input class="form-control" type="file" id="formFile" accept="image/*" onchange="handleFiles(this.files)">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Nama Produk" value="${product.product_name}">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Harga Modal" value="${product.capital}">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Tipe" value="${product.product_type}">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Harga Jual Permeter" value="${product.product_price}">
        </div>
        <div class="col-md-6 mb-5">
            <input type="text" class="form-control" placeholder="Jumlah Stok Pergulung" value="${product.stock}">
        </div>
        <button type="submit" class="btn btn-secondary">Hapus Produk</button>
        <button type="submit" class="btn btn-success">Simpan</button>
    </div>
`;

export { createProductItemTemplate, createDetailProduct };
