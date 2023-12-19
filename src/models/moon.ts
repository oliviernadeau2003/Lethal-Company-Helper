export default class Moon {
    name: string = ""
    hazardLevel: HazardLevel
    difficulty: Difficulty
    travelCost: number = 0
    mainEntrance: number = 0
    fireExist: number = 0
    conditions: string = ""
    history: string = ""
    fauna: string = ""  //! MAKE FAUNA A ARRAY OF CREATURE  => Fauna: Array<string | number> = []

    constructor(
        name: string = "",
        hazardLevel: HazardLevel = HazardLevel.Safe,
        difficulty: Difficulty = Difficulty.Safe,
        travelCost: number = 0,
        mainEntrance: number = 0,
        fireExist: number = 0,
        conditions: string = "",
        history: string = "",
        fauna: string = "",
    ) {
        this.name = name
        this.hazardLevel = hazardLevel
        this.difficulty = difficulty
        this.travelCost = travelCost
        this.mainEntrance = mainEntrance
        this.fireExist = fireExist
        this.conditions = conditions
        this.history = history
        this.fauna = fauna
    }
}

export enum HazardLevel {
    Safe = "Safe",
    D = "D",
    C = "C",
    B = "B",
    A = "A",
    S = "S",
    SPlus = "S+",
}

export enum Difficulty {
    Safe = "Safe",
    Easy = "Easy",
    Intermediate = "Intermediate",
    Hard = "Hard",
}