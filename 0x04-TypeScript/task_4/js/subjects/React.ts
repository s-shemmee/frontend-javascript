import { Subject } from './Subject';
import { Teacher } from './Teacher';

export interface ReactTeacher extends Teacher {
  experienceTeachingReact?: number;
}

export class React extends Subject {
  getRequirements(): string {
    return 'Here are the assassination requirements for React:\n- Master component state\n- Understand virtual DOM manipulation\n- Develop deceptive UI traps';
  }

  getAvailableTeacher(): string {
      const rTeacher = this.teacher as ReactTeacher;
      if (rTeacher?.experienceTeachingReact && rTeacher.experienceTeachingReact > 2) {
        return `Available teacher: ${rTeacher.firstName} (FGS how is he qualified for EVERY subject?)`;
      }
      return 'No available teacher (Koro ate them. Not joking.)';
  }
}