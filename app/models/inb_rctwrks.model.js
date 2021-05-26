module.exports = (sequelize, Sequelize) => {
	const inb_rctwrks = sequelize.define("inb_rctwrks", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },
   cat_id: {
        type: Sequelize.INTEGER,
        
      },
    homename:{
        type: Sequelize.STRING,
        comment:" Name for homepage"
    },
    	title:{
			type: Sequelize.STRING,
			comment:" Name"
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
         whatwegot1:{
            type:Sequelize.STRING,
			commet:"Blog Image Link"
            }, 
            whatwegot2:{
                type:Sequelize.STRING,
                commet:"Blog Image Link"
                }, 
                whatwegot3:{
                    type:Sequelize.STRING,
                    commet:"Blog Image Link"
                    }, 
			
	
  },{
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_rctwrks;
};
 
 


