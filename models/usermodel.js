module.exports = (sequelize,Sequelize) => {
    const User = sequelize.define("user",{
        user_name : {
            type : Sequelize.STRING,
            require : true,
            unique : true
        },
        email_id : {
            type : Sequelize.STRING
        },
        password : {
            type : Sequelize.STRING
        }
    });

    return User;
};