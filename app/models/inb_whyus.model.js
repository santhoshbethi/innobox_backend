module.exports = (sequelize, Sequelize) => {
	const inb_whyus = sequelize.define("inb_whyus", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },
    category:{
	type: Sequelize.STRING(50),
	
	comment:"belongs to which tab"
},

    	title:{
			type: Sequelize.STRING(50),
			
			comment:"title"
		},
		path:{
			type: Sequelize.STRING(255),
			
			comment:"certification image"
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
  return inb_whyus;
};
 