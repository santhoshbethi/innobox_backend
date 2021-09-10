module.exports = (sequelize, Sequelize) => {
	const inb_abtus = sequelize.define("inb_social", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	title:{
			type: Sequelize.STRING,
			comment:"fb"
		},
		value:{
			type: Sequelize.STRING,
			comment:"path "
		},
      
		
			status:{
				type:Sequelize.STRING,
				defaultValue: "0",
				comment:"Status -> 0-ACTIVE, 1-INACTIVE"
			},
		
  },{
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_abtus;
};
 
 


