module.exports = (sequelize, Sequelize) => {
	const inb_hglts = sequelize.define("inb_hglts", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	serviceID:{
			type: Sequelize.INTEGER,
			unique:true,
			comment:"Enquirer Name"
		},
				cntnt:{
				type:Sequelize.STRING,
				comment:"High Light Content"
			},
			
		
  },
  {
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_hglts;
};
 