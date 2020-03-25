const connection = require("./../../Database");

module.exports = {
  async store(request, response) {
    const { id } = request.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name");

    if (!ong) {
      return response.status(400).json({ error: "Ong nao encontrada" });
    }

    return response.json(ong);
  }
};
