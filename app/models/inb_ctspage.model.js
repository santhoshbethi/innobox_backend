module.exports = (sequelize, Sequelize) => {
	const inb_career = sequelize.define("inb_ctspage", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	image:{
			type: Sequelize.STRING,
			
			comment:"image path"
        },
        shtdesc:{
            type: Sequelize.STRING,
			
			comment:"Desc below img"
        },
  },
  {
	   freezeTableName: true,
	   timestamps:false
  });

  return inb_ctspage;
};