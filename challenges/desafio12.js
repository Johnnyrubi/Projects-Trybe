db.trips.aggregate([
  { $group: { _id: { day: { $dayOfWeek: "$startTime" }, estacaoNome: "$startStationName" }, soma: { $sum: 1 } } },
  { $project: { nomeEstacao: "$_id.estacaoNome", total: "$soma", _id: 0 } },
  { $sort: { total: -1 } },
  { $limit: 1 },
]);
