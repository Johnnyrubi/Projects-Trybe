db.trips.aggregate([
  { $group: {  
    _id: "$usertype",
    horas: { $avg: { $subtract: ["$stoptime", "$starttime"] } },
  } },
  { 
    $project: {
    _id: 0,
    tipo: "$_id",
    duracaoMedia: { $round: [{ $divide: ["$horas", 3600000] }, 2] },
  } },
  { $sort: { duracaoMedia: 1 } },
]);
