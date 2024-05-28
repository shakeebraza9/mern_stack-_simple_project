const home = async(req,res)=>{
try{
    res.
    status(200).
    send("Shakeeb Raza");
}catch(error){
    console.log(error);
}
}

const register = async (req,res)=>{
    try{
        res.status(200).send("wellcome to over register page");
    }catch(error){
        console.log(error);
    }

};

module.exports={home,register};