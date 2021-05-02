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
			}
  },
  {
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_mnbar;
};
 