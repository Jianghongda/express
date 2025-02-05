exports.list = async (req, res, next) => {
  console.log(req.method);
  res.send('/user-list')
}

exports.delete = async (req, res) => {

}