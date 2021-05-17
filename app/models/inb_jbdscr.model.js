module.exports = (sequelize, Sequelize) => {
	const inb_jbdscr  = sequelize.define("inb_jbdscr", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },
	  
    jobID:{
			type: Sequelize.INTEGER
    },
    description:{
      type:Sequelize.TEXT,
	  comment:"job desvription"
    } 
},
  {
	   freezeTableName: true,
	   timestamps:false
  });
  return inb_jbdscr ;
};
 