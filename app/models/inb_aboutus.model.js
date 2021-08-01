module.exports = (sequelize, Sequelize) => {
	const inb_abtus = sequelize.define("inb_abtus", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	title:{
			type: Sequelize.STRING,
			comment:"sidename"
		},
		value:{
			type: Sequelize.STRING,
			comment:"value "
		},
      
		
			status:{
				type:Sequelize.STRING,
				defaultValue: "0",
				comment:"Job Status -> 0-ACTIVE, 1-INACTIVE"
			},
		
  },{
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_abtus;
};
 
 


