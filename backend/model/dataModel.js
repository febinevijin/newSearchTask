import mongoose from 'mongoose'

const dataSchema = mongoose.Schema({
    NO: {type:Number},
    Name: {type:String},
    CurrentMarketPrice: {type:Number},
    MarketCap: {type:Number},
    PE: {type:Number},
    DividendYield: {type:Number},
    ROCE:{type:Number},
    ROE:{type:Number},
    DebtToEquity: {type:Number},
    EPS: {type:Number},
    Reserves: {type:Number},
    Debt:  {type:Number},
})

const DATA = mongoose.model("DATA" , dataSchema)

export default DATA