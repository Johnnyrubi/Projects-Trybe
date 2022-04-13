db.voos.findOne({ 
  litrosCombustivel:
  { $exists: { $lt: 1000 } } }, 
  { vooId: 1, _id: 0, litrosCombustivel: 1 });
