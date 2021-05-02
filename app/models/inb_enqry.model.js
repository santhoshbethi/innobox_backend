module.exports = (sequelize, Sequelize) => {
	const inb_enqry = sequelize.define("inb_enqry", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	locationName:{
			type: Sequelize.STRING,
			comment:"Location Name"
		},
		
		locationCountry:{
			type:Sequelize.STRING,
			comment:"Location country"
		},

		locationAddress:{
			type:Sequelize.TEXT,
			commet:"Location Address"
			},
			
		locationLat:{
				type:Sequelize.STRING,
				comment:"Location Latitude"
			},
			locationLan:{
				type:Sequelize.STRING,
				comment:"Location Longitude"
			},
			phoneNumber:{
				type:Sequelize.INTEGER,
				comment:"Contact Number"
			},
			emailAddress :{
				type:Sequelize.STRING,
				comment:"Email Address"
			}
		
  },{
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_enqry;
};
 