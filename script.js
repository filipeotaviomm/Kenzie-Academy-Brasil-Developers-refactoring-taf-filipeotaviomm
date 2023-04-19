function validateHeight(gender, height) {
  if (gender == "male") {
    return height >= 1.7;
  } else if (gender == "female") {
    return height >= 1.6;
  }
}

function validateBarTest(gender, barReps, barSeconds) {
  if (gender == "male") {
    return barReps >= 6 || barSeconds >= 15;
  } else if (gender == "female") {
    return barReps >= 5 || barSeconds >= 12;
  }
}

function validateAbs(gender, abs) {
  if (gender == "male") {
    return abs >= 41;
  } else if (gender == "female") {
    return abs >= 41;
  }
}

function validateRun(gender, runDistance, runTime) {
  if (gender == "male") {
    return (
      (runDistance >= 3000 && runTime <= 720) ||
      (runDistance >= 5000 && runTime <= 1200)
    );
  } else if (gender == "female") {
    return (
      (runDistance >= 4000 && runTime <= 900) ||
      (runDistance >= 6000 && runTime <= 1320)
    );
  }
}

function validateSwim(gender, swimDistance, swimTime, diveTime) {
  if (gender == "male") {
    return (swimDistance >= 100 && swimTime <= 60) || diveTime <= 30;
  } else if (gender == "female") {
    return (swimDistance >= 100 && swimTime <= 60) || diveTime <= 30;
  }
}

function areCandidateResultsValid(
  gender,
  height,
  barReps,
  barSeconds,
  abs,
  runDistance,
  runTime,
  swimDistance,
  swimTime,
  diveTime
) {
  if (
    validateHeight(gender, height) &&
    validateBarTest(gender, barReps, barSeconds) &&
    validateAbs(gender, abs) &&
    validateRun(gender, runDistance, runTime) &&
    validateSwim(gender, swimDistance, swimTime, diveTime)
  ) {
    return true;
  } else {
    return false;
  }
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
  process.argv[2], // Genero
  process.argv[3], // Altura
  process.argv[4], // Repetições de barra
  process.argv[5], // Tempo de barra em segundos
  process.argv[6], // Abdominais
  process.argv[7], // Distancia percorrida em metros
  process.argv[8], // Tempo total da corrida em segundos
  process.argv[9], // Distancia do nado em metros
  process.argv[10], // Tempo total de nado em segundos
  process.argv[11] // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console

function showMessage(message) {
  console.log(message.toString().toUpperCase());
}

showMessage(areCandidateValid);
