/**
 * Created by cena on 2016/4/18.
 */
var connection = require('./db.js');
var uuid = require('node-uuid');

function Product(product){
    this.state=product.state;
    this.id=product.id;
    this.photo=product.photo;
    this.price=product.price;
    this.describe=product.describe;
    this.name=product.name;
}
// 链接数据库的函数们
// 向数据库请求所有列表数据
Product.getAllList=function(callback){
    console.log("已进入getProByid函数")
    var selectSql = 'SELECT * FROM list';
    //query执行sql语句的方法，第一参数字符串型的sql语句,变量
    connection.query(selectSql, [], function (err, res) {
        if (err) {
            console.log('getProByid err:' + err);
            return;
        }
        console.log('Get product success'+res);
        console.dir(res);
        callback(err, res);
    });
}
// 向数据库请求状态数据列表
Product.getProByid=function(state,callback){
    var selectSql = 'SELECT * FROM list WHERE state =?';
    //query执行sql语句的方法，第一参数字符串型的sql语句,变量
    connection.query(selectSql, [state], function (err, res) {
        if (err) {
            console.log('getProByid err:' + err);
            return;
        }
        console.log('Get product success'+res);
        console.dir(res);
        callback(err, res);
    });
}

//Product.deletProByid=function(id,callback){
//    var delSql = 'DELETE FROM product WHERE phone=?';
//    connection.query(delSql, [id], function (err, res) {
//        if (err) {
//            console.log('getProByid err:' + err);
//            return;
//        }
//       // console.log('Get product success'+res);
//        //console.dir(res);
//        callback(err, res);
//    });
//}
//Product.updateProByid=function(product,callback){
//    var delSql = 'UPDATE product SET price =? WHERE phone=?';
//    connection.query(delSql, [product.price,product.id], function (err, res) {
//        if (err) {
//            console.log('getProByid err:' + err);
//            return;
//        }
//        // console.log('Get product success'+res);
//        //console.dir(res);
//        callback(err, res);
//    });
//}
//Product.savePro=function(product,callback){
//    var id=uuid.v1();
//    var saveSql='INSERT INTO product (id,photo,price,pro_describe,pro_name) VALUES (?,?,?,?,?)';
//      connection.query(saveSql, [id,product.photo,product.price,product.describe,product.name], function (err, res) {
//        if (err) {
//            console.log('getProByid err:' + err);
//            return;
//        }
//        // console.log('Get product success'+res);
//        //console.dir(res);
//        callback(err, res);
//    });


//}

module.exports=Product;