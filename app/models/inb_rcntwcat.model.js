module.exports = (sequelize, Sequelize) => {
	const inb_rcntwcat = sequelize.define("inb_rcntwcat", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	name:{
			type: Sequelize.STRING,
			
			comment:"image path"
        },
        status:{
            type:Sequelize.STRING,
            comment:"Job Status -> ACTIVE, INACTIVE"
        },
        status:{
          type:Sequelize.STRING,
          defaultValue: "0",
          comment:"Job Status -> 0-ACTIVE, 1-INACTIVE"
        },
  },
  
  {
	   freezeTableName: true,
	   timestamps:false
  });

  return inb_rcntwcat;
};