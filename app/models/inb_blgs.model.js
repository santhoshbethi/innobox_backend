module.exports = (sequelize, Sequelize) => {
	const inb_blgs = sequelize.define("inb_blgs", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	title:{
			type: Sequelize.STRING,
			comment:"Blog Name"
		},
		serviceID:{
			type: Sequelize.STRING,
			comment:"menu Id"
		},
		qtxt:{ 
		type: Sequelize.STRING,
			
		comment:"Quick text"
		},
		shdcr:{
			type:Sequelize.STRING(500),
			comment:"Short description"
		},
		fdcr:{
			type:Sequelize.TEXT,
			comment:"Full description"
		},
		image1:{
			type:Sequelize.STRING,
			commet:"Blog Image Link"
			},
			
		image2:{
				type:Sequelize.STRING,
				comment:"Image link"
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
  return inb_blgs;
};
 
 


