const Product = require('./../models/product')

module.exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        activeAddProduct: true,
        formsCSS: true,
        productCSS: true
    })
}

module.exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save()
    res.redirect('/')
}

module.exports.getProducts = (req, res, next) => {
    // console.log('shop.js', adminData.products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    const products = Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'My Shop',
            docTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true,
        })
    });
    
}