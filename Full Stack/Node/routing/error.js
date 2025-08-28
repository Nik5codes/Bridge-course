const notfound = (req,res,next) => {
    const error = new Error (`route not found ${req.originalUrl}`)
    console.log(res.status(404));
    next()
}

const errorhandler = (error,req,res,next) => {
    const statuscode = res.statuscode === 200?500:res.statuscode;
    console.log(statuscode);
    res.status(statuscode)
}

module.exports = {notfound,errorhandler}