const db=require("../models");
const contactus=db.cntus;
const nodemailer = require('nodemailer');
const msg=db.msg;
exports.addaddress = (req, res) => {
    contactus.create({
        locationName:req.body.locationName,
        locationCountry:req.body.locationCountry,
        locationAddress:req.body.locationAddress,
        locationLat:"0",
        locationLan:"0",
        phoneNumber:req.body.phoneNumber,
        emailAddress:req.body.emailAddress,


})
.then(contactus => {

    res.send({ message: "address addded successfully"});
  })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.getaddress= (req, res) => {
    contactus.findAll({

    }).then(showhome => {

        res.status(200).send({ message: showhome });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.updateaddress=(req,res)=>{
      
    contactus.update({    
      locationName:req.body.locationName,
      locationCountry:req.body.locationCountry,
      locationAddress:req.body.locationAddress,
      locationLat:"0",
      locationLan:"0",
      phoneNumber:req.body.phoneNumber,
      status:req.body.status,
      emailAddress:req.body.emailAddress},{where:{ID:req.body.id}
    }).then(showhome => {
  
      res.status(200).send({ message: showhome });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  };
  exports.updatetext=(req,res)=>{
    
  contactus.update({shtdesc:req.body.text},{where:{ID:req.body.id}
  }).then(showhome => {

    res.status(200).send({ message: showhome });
    
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};
exports.sendmsg = (req, res) => {
    msg.create({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        company:req.body.company,
        message:req.body.message,
        messageCat:req.body.messagecat,
       


})
.then(contactus => {
  let subject = 'Thank you. We have receieved your request';
  let bodyText = 'Registration';


  var transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.googlemail.com',
      port: 465,
      secure: true,
      auth: {
           user: 'innoboxwebmail@gmail.com',
              pass: "!Bx@2019"
      }
      

  });

var mailOptions = {
from: 'website@innobox.com',
to: UserId,
subject: subject,
text: bodyText,
html:"<div style='width:860px; font-family:Ubuntu, sans-serif !important;'><div style='height:101px; border-bottom:1px solid#bbb8b8'><div style='float:left;'><img src='http://bcfevents.in/assets/images/Logo.png'></div><div style='float:right;'></div></div><br><br><div><h1 style='text-align:center;color:#663332;font-size: 2em;'>Thank you for your Registering With Us!</h1></div><center><br><br><br><div style='width:80%;'><br><p style='font-weight:bold;font-size:15px;color:#E47502; '>Hi..,</p><br><p style='font-weight:bold;font-size:15px;color:#E47502; '><p style='font-weight:bold;font-size:15px;color:#E47502; '></p></div><br><br><br><br><div style='clear:both;'></div><div style='width:80%;'> <p style='padding: 30px 5px;font-size: 20px;    font-weight:600;background-color:#F6F5F3;color:#5C442C;border:0px solid #BBB2A9; border-radius:10px;'>If you have any trouble, please contact our support +91 8886123408</p><p style='font-size:14px;font-weight:lighter;line-height:1.4;color:#968e8e;'>This Email is sent by BCF Events <br>@2019,&nbsp;bcfevents.in.&nbsp;&nbsp;All Rights Reserved | <a href='http://bcfevents.in/#/faq'>Privacy Policy.</a></p></div><br><br></center></div>"
};

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          console.log(error);
      } else {
          console.log('Email sent: ' + info.response);
      }
  });

    res.send({ message: "req addded successfully"});
  })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.getsendmsg= (req, res) => {
    msg.findAll({

    }).then(showhome => {

        res.status(200).send({ message: showhome });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };