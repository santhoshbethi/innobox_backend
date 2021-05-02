module.exports = (sequelize, Sequelize) => {
	const inb_career = sequelize.define("inb_career", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	jobTitle:{
			type: Sequelize.STRING,
			
			comment:"job title"
		},
				locationCountry:{
				type:Sequelize.STRING,
				comment:"High Light Content"
			},
			experience:{
				type:Sequelize.STRING,
				comment:"	Experience full text"
			},
			opens:{
				type:Sequelize.STRING,
				comment:"Number of open positions "
			},
			image:{
				type:Sequelize.STRING,
				comment:"Image link"
			},
			status:{
				type:Sequelize.STRING,
				comment:"Job Status -> ACTIVE, INACTIVE"
			},
			
			
		
  },
  {
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_career;
};
 