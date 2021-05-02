module.exports = (sequelize, Sequelize) => {
	const inb_blgs = sequelize.define("inb_blgs", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },
	serviceID: {
      type: Sequelize.INTEGER,
	  autoIncrement:false,
	  comment:"Service ID",
	  unique:true
	  
    },
    	title:{
			type: Sequelize.STRING,
			comment:"Blog Name"
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
			}
		
  },{
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_blgs;
};
 
 


