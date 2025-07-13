import { Teacher } from './Teacher';

export abstract class Subject {
  protected teacher: Teacher | undefined;

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }

  abstract getRequirements(): string;
  abstract getAvailableTeacher(): string;
}