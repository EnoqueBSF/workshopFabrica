class InfoController {
  index(req, res) {
    return res.json({ sistema: 'Fábrica de Software', version: '1.0.0' });
  }
}

module.exports = new InfoController();
