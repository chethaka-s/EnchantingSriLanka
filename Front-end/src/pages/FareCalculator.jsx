
const fareData = {
  car: {
    baseFare: 750,
    ratePerKm: 100,
  },
  van: {
    baseFare: 1000,
    ratePerKm: 120,
  },
  tuktuk: {
    baseFare: 500,
    ratePerKm: 70,
  },
};

function calculateFares(distancetaxi) {
  const calculatedFares = {};
  for (const vehicleType in fareData) {
    const fare = fareData[vehicleType].baseFare + distancetaxi * fareData[vehicleType].ratePerKm;
    calculatedFares[vehicleType] = fare.toFixed(2); // Format fare to two decimal places
  }
  return calculatedFares;
}

export default calculateFares;
