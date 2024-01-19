import { Instruction } from "./recipe.model";

export const InstructionDummy: Instruction[] = [
    {title: "Gemüse schneiden", step: 0, content: 'Gemüse in kleine Scheiben schneiden', ingredients: [{name: "Parika", amount: "3", unit: "stück"}, {name: "Karotte", amount: "1", unit: "stück"}] },
    {title: "Nudeln kochen", step: 1, content: 'Nudeln in einem Topf zum kochen brignen', utils: [{name: "Topf"}], ingredients: [{name: "Parika", amount: "3", unit: "stück"}, {name: "Karotte", amount: "1", unit: "stück"}] }

]
