module.exports = (sequelize, Sequelize) => {
	const inb_career = sequelize.define("inb_careerimgs", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	image:{
			type: Sequelize.STRING,
			
			comment:"image path"
        },
        imageType:{
			type: Sequelize.STRING,
			
			comment:"image Type"
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

  return inb_career;
};