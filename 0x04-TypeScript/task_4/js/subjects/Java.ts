import { Subject } from './Subject';
import { Teacher } from './Teacher';

export interface JavaTeacher extends Teacher {
  experienceTeachingJava?: number;
}

export class Java extends Subject {
  getRequirements(): string {
    return 'Here are the assassination requirements for Java:\n- Master multithreading\n- Understand JVM vulnerabilities\n- Develop poison algorithms';
  }

  getAvailableTeacher(): string {
      const jTeacher = this.teacher as JavaTeacher;
      if (jTeacher?.experienceTeachingJava && jTeacher.experienceTeachingJava > 3) {
        return `Available teacher: ${jTeacher.firstName} (surprise! It's the same tentacle-faced menace... again)`;
      }
      return 'No available teacher (last one "accidentally" fell into Koro\'s disintegration ray)';
  }
}