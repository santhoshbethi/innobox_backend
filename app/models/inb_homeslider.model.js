module.exports = (sequelize, Sequelize) => {
	const inb_homeslider = sequelize.define("inb_homeslider", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	title:{
			type: Sequelize.STRING,
			comment:"Blog Name"
		},
		path:{
			type: Sequelize.STRING,
			comment:"Image path"
		},
		title:{ 
		type: Sequelize.STRING,
			
		comment:"title"
		},
		text:{
			type:Sequelize.STRING,
			comment:"Short description"
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
  return inb_homeslider;
};
 
 


