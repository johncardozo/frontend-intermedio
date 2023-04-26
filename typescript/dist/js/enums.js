"use strict";
var TrainingType;
(function (TrainingType) {
    TrainingType[TrainingType["TRAINING_RUN"] = 0] = "TRAINING_RUN";
    TrainingType[TrainingType["INTERVALS"] = 1] = "INTERVALS";
    TrainingType[TrainingType["LONG_RUN"] = 2] = "LONG_RUN";
})(TrainingType || (TrainingType = {}));
let tipoEntrenamiento = TrainingType.TRAINING_RUN;
console.log(tipoEntrenamiento);
if (tipoEntrenamiento === TrainingType.TRAINING_RUN) {
    console.log("training run");
}
else if (tipoEntrenamiento === TrainingType.INTERVALS) {
    console.log("intervals");
}
