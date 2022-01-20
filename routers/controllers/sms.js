var nodemailer = require('nodemailer');
const userModel = require("../../db/models/userModel");

const num=0544357424664;
const emailPost = async(req,res)=>{

    const {email} =req.body
    // const user = await userModel.findOne({ email: email });
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rashasauuu3@gmail.com',
    pass: 'flaqmmtszlsyxvao'
    // user:'productivefamilieswebsite@gmail.com',
    // pass:'oavzjadkbsbonsog' || 'ofbmdxzxfmxedbze' || 'ossetpvtksohccbk'
  }
});

const mailOptions = {
  from: 'PRODUCTIVE FAMILIES',
  to: email,
  subject: 'PRODUCTIVE FAMILIES',
  text: `Thank you for chossing us,
   please share us your location at this number : ${num} `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error,"its err");
  } else {
    console.log('Email sent: ' + info.response);
    res.status(200).json(info.response);

    
  }
});
}

module.exports = {emailPost};
