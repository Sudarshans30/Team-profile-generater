const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return a new intern object which contains properties of name,id, email and school when called with the 'new' keyword", () => {
      const intern = new Intern();
      expect("name" in intern).toEqual(true);
      expect("id" in intern).toEqual(true);
      expect("email" in intern).toEqual(true);
      expect("school" in intern).toEqual(true);
    });
    it("should set 'name','id','email' and 'school' when created", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const school = "EXD";
      const intern = new Intern(name, id, email, school);
      expect(intern.name).toEqual(name);
      expect(intern.id).toEqual(id);
      expect(intern.email).toEqual(email);
      expect(intern.school).toEqual(school);
    });
  });

  describe("getName", () => {
    it("should return the name of intern", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const school = "EXD";
      const intern = new Intern(name, id, email, school);
      expect(intern.getName()).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return the id of intern", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const school = "EXD";
      const intern = new Intern(name, id, email, school);
      expect(intern.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return the email of intern", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const school = "EXD";
      const intern = new Intern(name, id, email, school);
      expect(intern.getEmail()).toEqual(email);
    });
  });

  describe("getSchool", () => {
    it("should return the school of intern", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const school = "EXD";
      const intern = new Intern(name, id, email, school);
      expect(intern.getSchool()).toEqual(school);
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const school = "EXD";
      const intern = new Intern(name, id, email, school);
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
