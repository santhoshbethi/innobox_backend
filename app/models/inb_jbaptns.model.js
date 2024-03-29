module.exports = (sequelize, Sequelize) => {
	const inb_jbaptns = sequelize.define("inb_jbaptns", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	fullName:{
			type: Sequelize.STRING,
			
			comment:"Applicant Full Name"
		},
				email:{
				type:Sequelize.STRING,
				comment:"Applicant Email Address"
			},
			mobile:{
				type:Sequelize.STRING,
				comment:"Applicant Mobile Number"
			},
			qualification:{
				type:Sequelize.STRING,
				comment:"Applicant High Qualification"
			},
			resume:{
				type:Sequelize.STRING,
				comment:"Resume uploaded link"
			},
			applyingFor:{
				type:Sequelize.STRING,
				comment:"Applying Job Title"
			},
			previousCompany:{
				type:Sequelize.STRING,
				comment:"Previous company details"
			},
			message:{
				type:Sequelize.STRING,
				comment:"Applicant message"
			},
			status:{
				type:Sequelize.STRING,
				defaultValue: "0",
				comment:"Job Status -> 0-applied, 1-viewed,2-shortlisted,3-rejected"
			},
		
  },
  {
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_jbaptns;
};
 