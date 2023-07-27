// exports.area = function(r){
//     return Math.PI * r * r;
// }

class circle{
    area(r){
        return Math.PI * r * r;
    }
    circumference(r){
        return 2*Math.PI*r;
    }
}

module.exports = circle;