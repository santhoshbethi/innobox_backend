module.exports = (sequelize, Sequelize) => {
	const inb_cntus = sequelize.define("inb_cntus", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	locationName:{
			type: Sequelize.STRING,
			
			comment:"location Name"
		},
				locationCountry:{
				type:Sequelize.STRING,
				comment:"High Light Content"
			},
			locationAddress:{
				type:Sequelize.STRING,
				comment:"location Country"
			},
			locationLat:{
				type:Sequelize.STRING,
				comment:"location Latitude "
			},
			locationLan:{
				type:Sequelize.STRING,
				comment:"location Longitude "
			},
			phoneNumber:{
				type:Sequelize.STRING,
				comment:"Contact Number"
			},
			emailAddress:{
				type:Sequelize.STRING,
				comment:"email Address"
			},
			status:{
				type:Sequelize.STRING,
				comment:"Job Status -> ACTIVE, INACTIVE"
			},
			status:{
				type:Sequelize.STRING,
				defaultValue: "0",
				comment:"Job Status -> 0-ACTIVE, 1-INACTIVE"
			},
			
		
  },
  {
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_cntus;
};
 