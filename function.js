window.function = function(service, costCenters, clients) {
  // Ensure the values are not undefined
  service = service.value ?? {};
  costCenters = costCenters.value ?? [];
  clients = clients.value ?? [];

  const results = [];
  costCenters.forEach((costCenter) => {
    clients.forEach((client) => {
      const costCenterShare = service.cost * (costCenter.percentage / 100);
      const clientShare = costCenterShare * (client.percentage / 100);
      results.push({
        No: service.id,
        Area: costCenter.name,
        Client: client.name.toUpperCase(),
        Value: parseFloat(clientShare.toFixed(2))
      });
    });
  });

  return results;
}
