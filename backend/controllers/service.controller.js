import mongoose from "mongoose";
import Service from "../models/service.model.js";

export const createService = async (req,res) => {
    const service = req.body;

    if(!service.name || !service.description || !service.price){
        return res.status(400).json({success:  false, message: "Please fill all fields"});
    }

    const newService = new Service(service);

    try {
        await newService.save();
        res.status(200).json({ success: true, data: newService });
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: "server error"});
    }
}

export const updateService = async (req,res) => {
    const service = req.body;
    const {id} = req.params;

     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "invalid service id"});
    }

    try {
        const updateProduct = await Product.findByIdAndUpdate(id,service,{new: true});
        res.status(200).json({ success: true,  data: updateProduct });

    } catch (error) {
        res.status(500).json({success: false,  message: "server error"});

    }
    
}

export const deleteService =  async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "invalid service id"});
    }

    try {
        await Service.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "product deleted"});
    } catch (error) {
        res.status(500).json({success: false, message: "server error"})
    }
}

export const getService = async (req, res) => {
    try {
        const service = await Service.find({});
        console.log("Service data:", service);
        res.status(200).json({ success: true, data: service });
    } catch (error) {
        res.status(500).json({success: false, message: "server error"})
    }

}