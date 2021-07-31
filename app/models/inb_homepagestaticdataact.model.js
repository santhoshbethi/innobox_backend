module.exports = (sequelize, Sequelize) => {
	const inb_stcdataact = sequelize.define("inb_stcdataact", {
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
      value:{
		type: Sequelize.STRING,
		comment:"Enter Value"
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
 
 


