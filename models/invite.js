module.exports = (sequelize,Sequelize) => {
    const Invite = sequelize.define("invite",{
        user_id : {
            type : Sequelize.STRING,
        },
        event_id : {
            type : Sequelize.STRING,
        }
    });

    return Invite;
};