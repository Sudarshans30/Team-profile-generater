const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return a new employee object ", () => {
      const employee = new Employee();
      expect("name" in employee).toEqual(true);
      expect("id" in employee).toEqual(true);
      expect("email" in employee).toEqual(true);
    });
    it("should set 'name','id' and 'email' when created", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const employee = new Employee(name, id, email);
      expect(employee.name).toEqual(name);
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(email);
    });
  });

  describe("getName", () => {
    it("should return the name of employee", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const employee = new Employee(name, id, email);
      expect(employee.getName()).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return the id of employee", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const employee = new Employee(name, id, email);
      expect(employee.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return the email of employee", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const employee = new Employee(name, id, email);
      expect(employee.getEmail()).toEqual(email);
    });
  });

  describe("getRole", () => {
    it("should return 'Employee'", () => {
      const name = "ToBobm";
      const id = 1;
      const email = "bob@gmail.com";
      const employee = new Employee(name, id, email);
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
