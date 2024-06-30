const jwt = require('jsonwebtoken');
function checkRole(roles) {
    return function (req, res, next) {
      const authorizationHeader = req.headers["authorization"];
  
      if (!authorizationHeader) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      const token = authorizationHeader.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      jwt.verify(token, "12345", (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: "Unauthorized" });
        }
        const userRole = decoded.role;
        console.log("Decoded role:", userRole);
        console.log("Allowed roles:", roles);
        if (roles.includes(userRole.trim())) {
          req.user = decoded;
          next();
        } else {
          res.status(403).json({ message: "Forbidden" });
        }
      });
    };
  }
module.exports = checkRole;
