export default (req, res) => {
    if (req.method === "GET"){
        res.status(200).json({ nome: "BRUNO" })
    } else{
        res.status(200).json({ nome: "LUIS" })
    }
    res.status(200).json({
        metodo: req.method
    })
}