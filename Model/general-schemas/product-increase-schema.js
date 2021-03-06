var mongoose = require('mongoose');

var ProductIncreaseSchema = mongoose.Schema({
    Product                         : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'hcm_product'
    },
    Origin_Variant                  : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'hcm_lut_origin_variants'
    },
    Expiration_Variant              : Date,
    Quantity                        : Number,
    Cost                            : Number      
  },{
    toJSON: { virtuals: true }
  });



  module.exports = ProductIncreaseSchema;