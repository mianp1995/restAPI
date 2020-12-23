/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getProduct : async (req, res) => {
    if (req.param.productCode) {
      let products = await Product.find({productCode : req.param.productCode});
      if (products.length > 0) {
        return res.send(products[0]);
      }
    }

    return res.badRequest('product $(res.param.productCode) not found');
  }


};

