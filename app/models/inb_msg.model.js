module.exports = (sequelize, Sequelize) => {
	const inb_msgs = sequelize.define("inb_msgs", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	name:{
			type: Sequelize.STRING(50),
			
			comment:"Enquirer Name"
		},
		email:{
			type: Sequelize.STRING(50),
			
			comment:"Enquirer email"
		},
		phone:{
			type: Sequelize.STRING(50),
			
			comment:"Enquirer phonenumber"
		},
		company:{
			type: Sequelize.STRING(50),
			
			comment:"Enquirer company"
		},
		message:{
			type: Sequelize.TEXT,
			
			comment:"Enquirer message"
		},
		messageCat:{
			type: Sequelize.INTEGER(50),
			
			comment:"Enquirer Category"
		}
		
  },
  {
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_msgs;
};
 