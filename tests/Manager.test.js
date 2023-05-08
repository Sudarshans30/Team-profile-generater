const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return a new manager object which contains properties of name,id, email and office number when called with the 'new' keyword", () => {
      const manager = new Manager();
      expect("name" in manager).toEqual(true);
      expect("id" in manager).toEqual(true);
      expect("email" in manager).toEqual(true);
      expect("officeNumber" in manager).toEqual(true);
    });
    it("should set 'name','id','email' and 'officeNumber' when created", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const officeNumber = "101";
      const manager = new Manager(name, id, email, officeNumber);
      expect(manager.name).toEqual(name);
      expect(manager.id).toEqual(id);
      expect(manager.email).toEqual(email);
      expect(manager.officeNumber).toEqual(officeNumber);
    });
  });

  describe("getName", () => {
    it("should return the name of manager", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const officeNumber = "101";
      const manager = new Manager(name, id, email, officeNumber);
      expect(manager.getName()).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return the id of manager", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const officeNumber = "101";
      const manager = new Manager(name, id, email, officeNumber);
      expect(manager.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return the email of manager", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const officeNumber = "101";
      const manager = new Manager(name, id, email, officeNumber);
      expect(manager.getEmail()).toEqual(email);
    });
  });

  describe("getRole", () => {
    it("should return 'Manager'", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const officeNumber = "101";
      const manager = new Manager(name, id, email, officeNumber);
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
