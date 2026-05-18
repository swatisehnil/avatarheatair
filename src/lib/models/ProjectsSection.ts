import { Schema, model, models } from 'mongoose';

export interface IProject { image: string; title: string; category: string; col: string; order: number }

export interface IProjectsSection {
  subtitle: string;
  heading: string;
  projects: IProject[];
}

const projectSchema = new Schema<IProject>({
  image: { type: String, default: '/assets/img/project/1-1.jpg' },
  title: { type: String, default: 'Project' },
  category: { type: String, default: 'Home Repair' },
  col: { type: String, default: 'col-xl-6 col-lg-6 col-md-6' },
  order: { type: Number, default: 0 },
});

const schema = new Schema<IProjectsSection>({
  subtitle: { type: String, default: 'Recent Project' },
  heading: { type: String, default: 'We Provide you the Highest Quality Work' },
  projects: { type: [projectSchema], default: [] },
}, { timestamps: true });

export default models.ProjectsSection || model<IProjectsSection>('ProjectsSection', schema);
