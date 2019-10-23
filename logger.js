const logger = (req,res,next)=>{
    //let id = 1;
    
    const message = `desde: ${req.url}`;
    const start = new Date().getTime();
    let id = start;
    //uuid
    const st = `INICIO: ${id}: ${message}`;
    console.log(st);
    res.on('finish',()=>{
        const end = new Date().getTime();
        const duration = end - start;
        const st2 = `FIN: ${id}: ${message}, ${duration}`;
        console.log(st2);
    })
    
    next();
}

module.exports = logger;
