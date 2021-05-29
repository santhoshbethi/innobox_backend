module.exports = (sequelize, Sequelize) => {
	const inb_stcdata = sequelize.define("inb_stcdata", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	title:{
			type: Sequelize.STRING,
			comment:"sidename"
		},
		value:{
			type: Sequelize.STRING,
			comment:"menu Id"
		},
      type:{
		type: Sequelize.STRING,
		comment:"input type -> image-i or text-t"
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
  return inb_stcdata;
};
 
 


