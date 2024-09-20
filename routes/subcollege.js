const express = require("express");
const College = requrie("../model/college.js")
const collegeRouter = express.Router();
const college = require("../middlewares/admin.js");


collegeRouter.post("/api/create-profile", college, async(req, res) => {
    try{
        const {name, description, facilities, profilePicture, location} = req.body;
        let college = new College({
            name,
            description,
            facilities,
            profilePicture,
            location
        });
        college = await college.save();
        res.json(college);
    } catch(error){
        res.status(500).json({ error: e.message });
    }
});
collegeRouter.get("api/get-college", async(req, res)=>{
    try{  
        const colleges = await College.find({});
        res.json(colleges);
    }catch(error){
        res.status(500).json({ error: e.message });
    }
})



