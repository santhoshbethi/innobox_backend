module.exports = (sequelize, Sequelize) => {
	const inb_whyinb = sequelize.define("inb_whyinb", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	title:{
			type: Sequelize.STRING(50),
			
			comment:"title"
		},
		content:{
			type: Sequelize.STRING(150),
			
			comment:"short test"
		},
		status:{
			type:Sequelize.STRING,
			defaultValue: "0",
			comment:"Job Status -> 0-created , 1-closed"
		},
		
  },
  {
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_whyinb;
};
 