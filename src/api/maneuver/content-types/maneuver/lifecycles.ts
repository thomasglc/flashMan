import validate from "../../validators/maneuver";
import customService from "../../services/customService";

export default {
    beforeCreate(event) {
        const { data } = event.params;
        data.people = customService.calculatePeople(data);
        validate(data);
    },

    beforeUpdate(event) {
        const { data } = event.params;
        data.people = customService.calculatePeople(data);
        validate(data);
    },
};