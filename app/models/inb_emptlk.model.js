module.exports = (sequelize, Sequelize) => {
	const inb_emptlk = sequelize.define("inb_emptlk", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	name:{
			type: Sequelize.STRING,
			
			comment:"Employee Name"
		},
			
			message:{
				type:Sequelize.STRING,
				comment:"Employee Feedback ContentS"
			},
			
			
		
  },
  {
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_emptlk;
};
 