interface Student {
  id: number;
  name: string;
  age: number;
  grades: Record<string, number>;
  isActive: boolean;

  // Method signatures
  updateGrade(course: string, grade: number): void;
  getAverageGrade(): number;
}

class UniversityStudent implements Student {
  id: number;
  name: string;
  age: number;
  grades: Record<string, number>;
  isActive: boolean;

  constructor(id: number, name: string, age: number, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.grades = {};
    this.isActive = isActive;
  }

  updateGrade(course: string, grade: number): void {
    this.grades[course] = grade;
  }

  getAverageGrade(): number {
    const total = Object.values(this.grades).reduce((acc, grade) => acc + grade, 0);
    return total / Object.keys(this.grades).length;
  }
}

// Usage
const student1 = new UniversityStudent(1, 'Alice', 20, true);
student1.updateGrade('Math', 95);
student1.updateGrade('History', 85);

console.log(`The average grade of ${student1.name} is ${student1.getAverageGrade()}.`);
