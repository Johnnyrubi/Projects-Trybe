use("aggregations");
db.trips.aggregate([
  { $group: { _id: { dia: { $dayOfWeek: "$startTime" }, estacaoNome: "$startStationName" }, soma: { $sum: 1 } } },
  { $project: { nomeEstacao: "$_id.estacaoNome", total: "$count", _id: 0 } },
  { $sort: { total: -1 } },
  { $limit: 1 },
]);
