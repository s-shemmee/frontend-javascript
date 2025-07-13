import { Subject } from './Subject';
import { Teacher } from './Teacher';

export interface CppTeacher extends Teacher {
  experienceTeachingC?: number;
}

export class Cpp extends Subject {
  getRequirements(): string {
    return 'Here are the assassination requirements for C++:\n- Master pointer arithmetic\n- Understand memory manipulation\n- Develop anti-sensei weapons';
  }

  getAvailableTeacher(): string {
      const cTeacher = this.teacher as CppTeacher;
      if (cTeacher?.experienceTeachingC && cTeacher.experienceTeachingC > 5) {
        return `Available teacher: ${cTeacher.firstName} (ofc it's Koro-sensei... who else could teach this lethal stuff?)`;
      }
      return 'No available teacher (probably because Koro vaporized them all)';
  }
}
