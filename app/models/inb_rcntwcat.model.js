module.exports = (sequelize, Sequelize) => {
	const inb_career = sequelize.define("inb_rcntwcat", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	name:{
			type: Sequelize.STRING,
			
			comment:"image path"
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

  return inb_rcntwcat;
};