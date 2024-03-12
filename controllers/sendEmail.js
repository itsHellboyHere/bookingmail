const nodemailer=require('nodemailer')
const sendEmail =async (req,res)=>{
    const userEmail =req.body.email;
    const name= req.body.name;
    const phoneno=req.body.contact;
    const des=req.body.description;
    const date=req.body.date;
    const service=req.body.services;
    console.log(userEmail);
        let testAccount =await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'vishal8409003672@gmail.com',
        pass: process.env.App_Pass,
    },
});

let info = await transporter.sendMail({
    from:'"vishal"<vishal8409003672@gmail.com>',
    to:'Makeupbypanwarpriya@gmail.com',
    subject:`Booking Information for ${name}`,
   html: `<h1>Name: ${name}</h1><br/>
               <b>Phone No. :</b> ${phoneno}<br/>
               <b>Description :</b> ${des}<br/>
               <b>Date and Time :</b> ${date}<br/>
               <b>Service Type :</b> ${service}`,
 text: `Name: ${name}\nPhone No.: ${phoneno}\nDescription: ${des}\nDate and Time: ${date}\nService Type: ${service}`
    
})
    res.json({msg:` Hey ${name} We Will reach out to you soon.`})
}

module.exports=sendEmail;