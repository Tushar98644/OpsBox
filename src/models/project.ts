import { model, models, Schema } from "mongoose";

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  techstack: {
    type: [String],
    required: true,
  },
  user : {  
    type: String,
    required: true,
  }
});

const Project = models.Project || model('Project', projectSchema);

export default Project;
