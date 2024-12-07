import { Project, ProjectModel, Task, TaskModel, User, UserModel } from "./types.ts";

export const fromModelToUser = (user: UserModel): User => ({
    id: user._id!.toString(),
    name: user.name,
    email: user.email,
    created_at: user.created_at 
});

export const fromModelToProject = (project: ProjectModel): Project => ({
    id: project._id!.toString(),
    name: project.name,
    description: project.description,
    start_date: project.start_date,
    end_date: project.end_date,
    user_id: project.user_id.toString(),
});

export const fromModelTotask = (task: TaskModel): Task => ({
    id: task._id!.toString(),
    title: task.title,
    description: task.description,
    status: task.status,
    created_date: task.created_date,
    due_date: task.due_date,
    project_id: task.project_id.toString(),
});