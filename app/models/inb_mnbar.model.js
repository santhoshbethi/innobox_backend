module.exports = (sequelize, Sequelize) => {
	const inb_mnbar = sequelize.define("inb_mnbar", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	itemName:{
			type: Sequelize.STRING(50),
			
			comment:"Menu Bar Item Name"
		},
		refID:{
				type:Sequelize.STRING,
				comment:"Menu Bar Item ID Referrence"
			},
			children:{
				type:Sequelize.STRING,
				comment:"To save children"
			},
			href:{
				type:Sequelize.STRING,
				comment:"link"
			}	,
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
  return inb_mnbar;
};
 
