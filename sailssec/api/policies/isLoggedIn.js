module.exports = async function (req, res, proceed) {

    if (req.session.userId !== undefined) {
        return proceed();
    }
    res.statusCode = 498
    return res.view("pages/homepage", {data: "forbidden"})
    // return res.forbidden();
}