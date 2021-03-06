const buildPayload = require('../helpers/build-payload');
const customTimes = require('./custom-times');
const delorean = require('@gabrieluizramos/delorean-js');

function formataPayload (data) {
    const weekDay = delorean.setDate(data).getWeekDay('short');
    const horarios = customTimes(weekDay);
    return buildPayload(data, horarios, weekDay);
}

const formatNumberWith2Digits = (number) => number < 10 ? `0${number}` : number;

module.exports = {
    formataPayload,
    formatNumberWith2Digits
};
