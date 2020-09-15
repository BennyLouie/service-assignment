export class CounterService {
  count = 0;

  countChanges() {
    this.count++;
    console.log('Times User Has Switched Between Inactive/Active: ' + this.count);
  }
}
