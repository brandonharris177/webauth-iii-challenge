module.exports = (department) => {
    return (req, res, next) => {
        // console.log(`req`, res.user)
        // console.log(`department`, department)
       if (department === res.user.department) {
           next()
       } else {
           res.status(403).json({message: "forbidden"})
       }
    };
   };
   