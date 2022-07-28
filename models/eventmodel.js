module.exports = (sequelize,Sequelize) => {
    const Event = sequelize.define("event",{
        event_name : {
            type : Sequelize.STRING,
        },
        event_date : {
            type : Sequelize.STRING,
        },
        created_by : {
            type : Sequelize.STRING,
        },
    });

    return Event;
}