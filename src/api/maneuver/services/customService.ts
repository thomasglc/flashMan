const calculatePeople = (data: { maneuverCount: number; victimCount: number; people: number }): number => {
    return data.maneuverCount  + data.victimCount;
};

export default {
    calculatePeople,
};