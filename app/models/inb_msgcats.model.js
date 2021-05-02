module.exports = (sequelize, Sequelize) => {
	const inb_msgcats = sequelize.define("inb_msgcats", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	catName:{
			type: Sequelize.STRING(50),
			
			comment:"Menu Bar Item Name"
		}
  },
  {
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_msgcats;
};
 