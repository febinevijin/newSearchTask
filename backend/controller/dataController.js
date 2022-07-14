import DATA from "../model/dataModel.js";
import dummyData from "../data/sampleData.js";

export const addProducts = async (req, res) => {
  try {
    const checkData = await DATA.find();

    if (checkData.length === 0) {
      await DATA.create(dummyData);
      res.json("Dummy data sucessfully added");
    } else {
      res.json("continue your work");
    }
  } catch (error) {
    console.log(error);
  }
};

export const searchData = async (req, res) => {
  try {
    
    const keyword = req.query.search
      ? {
          $or: [{ Name: { $regex: req.query.search, $options: "i" } }],
        }
      : false;
     

    if (keyword) {
      const values = await DATA.find(keyword);
      if (values.length === 0) {
        res.json("no such item");
      } else {
        res.json(values);
       
      }
    } else {
      res.json("Serach something");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllData= async(req,res) => {
  try {
    
    const allData = await DATA.find({})
    res.json(allData)
    
  } catch (error) {
    console.log(error);
  }
}
