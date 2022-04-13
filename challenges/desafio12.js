db.voos.count({
  "aeroportoDestino.pais": {
    $in: ["BRASIL", "CHILE", "ARGENTINA"],
  },
});
