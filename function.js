window.function = function (service, costCenters, clients) {
  // Ensure the parameters are properly extracted
  service = service.value ?? { id: 'default', cost: 0 };
  costCenters = costCenters.value ?? [];
  clients = clients.value ?? [];

  // Your logic to distribute the costs
  const results = costCenters.map(costCenter => {
    return clients.map(client => {
      const costCenterShare = service.cost * (costCenter.percentage / 100);
      const clientShare = costCenterShare * (client.percentage / 100);
      return {
        No: service.id,
        Area: costCenter.name,
        Client: client.name.toUpperCase(),
        Value: clientShare.toFixed(2)
      };
    });
  }).flat(); // Use flat to flatten the array of arrays

  // The result should be an array of objects, as per your glide.json specification
  return results;
};
