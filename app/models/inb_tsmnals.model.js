module.exports = (sequelize, Sequelize) => {
	const inb_tsmnals = sequelize.define("inb_tsmnals", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },

    	rank:{
			type: Sequelize.INTEGER,
			
			comment:"Testimonial Rank"
		},
		content:{
			type: Sequelize.TEXT,
			
			comment:"Testimonial Content"
		},
		customerName:{
			type: Sequelize.STRING(50),
			
			comment:"customer Name"
		}
  },
  {
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_tsmnals;
};
 