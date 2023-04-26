enum TrainingType {
  TRAINING_RUN, // 0
  INTERVALS, // 1
  LONG_RUN, // 2
}

// Declaración de variable con tipo Enum
let tipoEntrenamiento: TrainingType = TrainingType.TRAINING_RUN;

// Asigna valores definidos en Enum
//tipoEntrenamiento = TrainingType.INTERVALS;

// Muestra el valor asignado
console.log(tipoEntrenamiento);

// Verificación de valor contra Enum
if (tipoEntrenamiento === TrainingType.TRAINING_RUN) {
  console.log("training run");
} else if (tipoEntrenamiento === TrainingType.INTERVALS) {
  console.log("intervals");
}
