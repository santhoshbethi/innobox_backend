module.exports = (sequelize, Sequelize) => {
	const inb_enqry = sequelize.define("inb_enqry", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	Name:{
			type: Sequelize.STRING,
			comment:"Enquirer Name"
		},
		
		email:{
			type:Sequelize.STRING,
			comment:"Enquirer Email"
		},

		message:{
			type:Sequelize.TEXT,
			commet:"Enquirer Message"
			},
			status:{
				type:Sequelize.STRING,
				defaultValue: "0",
				comment:"Job Status -> 0-created, 1-viewed"
			},
			
		
  },
  {
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_enqry;
};
 